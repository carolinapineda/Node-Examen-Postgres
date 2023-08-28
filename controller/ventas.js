import { Productos, Ventas, DetallesVentas, Usuario } from "../models/index.js";


export const ventasProductos = async(req, res) =>{
    try {
        
      const { productos } = req.body;
      const {id} = res.params; // ID del usuario autenticado
  
      // Verificar si el usuario existe
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Calcular el total de la venta y verificar la disponibilidad de los productos
      let totalVenta = 0;
      const detallesVenta = [];
  
      for (const productoInfo of productos) {
        const producto = await Productos.findOne({
          where: {
            nombre: productoInfo.nombre
          }
        });
  
        if (!producto) {
          return res.status(404).json({ message: `Producto ${productoInfo.nombre} no encontrado` });
        }
  
        if (producto.existencia < productoInfo.cantidad) {
          return res.status(400).json({ message: `Stock insuficiente para el producto ${producto.nombre}` });
        }
  
        const subtotal = producto.precio * productoInfo.cantidad;
        totalVenta += subtotal;
  
        detallesVenta.push({
          ProductoId: producto.id,
          cantidad_venta: productoInfo.cantidad,
          precio_unitario: producto.precio,
          subtotal: subtotal
        });
      }
  
      // Crear una nueva venta en la base de datos asociada con el usuario
      const nuevaVenta = await Ventas.create({
        total: totalVenta,
        fecha_venta: new Date(),
        usuario_id: usuarioId // Asociar la venta con el usuario
      });
  
      // Registrar los detalles de los productos vendidos en DetalleVenta y actualizar existencias
      for (const detalle of detallesVenta) {
        await DetallesVentas.create({
          cantidad_venta: detalle.cantidad_venta,
          precio_unitario: detalle.precio_unitario,
          subtotal: detalle.subtotal,
          ProductoId: detalle.ProductoId,
          VentaId: nuevaVenta.id
        });
  
        const producto = await Productos.findByPk(detalle.ProductoId);
        producto.existencia -= detalle.cantidad_venta;
        await producto.save();
      }
  
      res.status(200).json({ message: 'Venta registrada exitosamente', total: totalVenta });

        
    } catch (error) {
        
    }
}