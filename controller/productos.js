import { sequelize } from "../database/database.js";
import { Productos } from "../models/producto.js";

export const getProducto = async(req, res) => {
    
    const productos = await Productos.findAll();
    res.json(productos);
};

// Funcion para crear un producto en la base de datos
export const postProducto = async(req, res) => {

     // Obtener los datos del cuerpo de la solicitud
     const {nombre, precio, descripcion, categoria_id, usuario_id} = req.body;
    try {
       

        // Crear un nuevo registro de producto en la base de datos usando en modelo 'Productos'
        const newProducto = await Productos.create({
            nombre: sequelize.literal(`UPPER('${nombre}')`),
            precio,
            descripcion: sequelize.literal(`UPPER('${descripcion}')`),
            categoria_id,
            usuario_id
        });

        // Enviar el producto creado como respuesta json
        res.json(newProducto);
        console.log(newProducto)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        }); 
    }
    
};


export const putProducto = async(req, res) => {

    const {id} = req.params;

    const {nombre, precio, descripcion} = req.body;

    // findByPk() se utiliza para buscar un registro en una base de datos por su clave primaria
    const producto = await Productos.findByPk(id);

        producto.nombre = sequelize.literal(`UPPER('${nombre}')`),
        producto.precio = precio,
        producto.descripcion = sequelize.literal(`UPPER('${descripcion}')`),
   
    await producto.save();

    res.json(await Productos.findOne({where:{id}}));
};


export const deleteProducto = async(req, res) => {

    const {id} = req.params;

    await Productos.destroy({
        where: {id}
    });

    res.json({message: `Se elimino correctamente el producto con el id ${id}`})
};


export const getProductoPorId = async(req, res) => { 
    
    const {id} = req.params;

    const producto = await Productos.findOne({
        where: {id}
    });

    if(!producto){
        return res.status(400).json({
            message: `No existe el usuario con el id ${id}`
        });
    };

    res.json(producto);
};