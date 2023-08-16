import { sequelize } from "../database/database.js";
import { Productos } from "../models/producto.js";

export const getProducto = async(req, res) => {
    
    const productos = await Productos.findAll();
    res.json(productos);
};

//Controlados para crear un producto en la base de datos
export const postProducto = async(req, res) => {

     // Obtener los datos del cuerpo de la solicitud
     const {nombre, precio, descripcion, categoria_id, usuario_id} = req.body;
    try {
       

        // Crear un nuevo registro de producto en la base de datos usando el modelo 'Productos'
        const newProducto = await Productos.create({

            nombre: sequelize.literal(`UPPER('${nombre}')`),
            precio,
            descripcion: sequelize.literal(`UPPER('${descripcion}')`),
            categoria_id,
            usuario_id
        });

        // Enviar el producto creado como respuesta json
        res.json(newProducto);

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        }); 
    }   
};

// Controlador para actualizar un productos por medio de su id 
export const putProducto = async(req, res) => {

    try {
        // Obtener el id del producto de los parametros de la url
        const {id} = req.params;
        // Obtener los datos del cuerpo la solicitud
        const {nombre, precio, descripcion} = req.body;

        // Buscar el producto por su id en la base de datos
        const producto = await Productos.findByPk(id);

            // Actualizar los atributos del producto
            producto.nombre = sequelize.literal(`UPPER('${nombre}')`),
            producto.precio = precio,
            producto.descripcion = sequelize.literal(`UPPER('${descripcion}')`),
        
        // Guardar los cambios en la base de datos
        await producto.save();
        // Responder con el producto actualizado en formato JSON
        res.json(await Productos.findOne({where:{id}}));

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        }); 
    }
};

// Controlador para eliminar un producto por medio de su id 
export const deleteProducto = async(req, res) => {

    try {
        // Obtener el id del producto de los parametros de la url
        const {id} = req.params;

        // Eliminar el producto de la base de datos por medio del id
        await Productos.destroy({
            where: {id}
        });
            // Respuesta con el producto encontrado en formato JSON
            res.json({message: `Se elimino correctamente el producto con el id ${id}`})

        } catch (error) {
            // Manejar errores y responder con un estado de error y un mensaje
            return res.status(500).json({
                message: error.message
            }); 
        }
};

// Controlador para obtener el producto por medio de su id 
export const getProductoPorId = async(req, res) => { 

    try {
        // Obtener el id del producto de los parametros de la url
        const {id} = req.params;

        // Buscar al producto en la base de datos por medio de su id
        const producto = await Productos.findOne({
            where: {id}
        });

        // Verifica si se encontro el producto
        if(!producto){
            return res.status(400).json({
                message: `No existe el usuario con el id ${id}`
            });
        };

        // Respuesta con el producto encontrado en formato JSON
        res.json(producto);
        
    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    }
};