import { Productos } from "../models/producto.js";

export const getProducto = async(req, res) => {
    
    const productos = Productos.findAll();
    res.json(productos);
};


export const postProducto = async(req, res) => {

    const {nombre, precio, descripcion} = req.body;

    const newProducto = Productos.create({
        nombre,
        precio,
        descripcion
    });

    res.json(newProducto);
};


export const putProducto = async(req, res) => {

    const {id} = req.params;

    const {nombre, precio, descripcion} = req.body;

    const producto = await Productos.findByPk(id);

    producto.nombre = nombre,
    producto.precio = precio,
    producto.descripcion = descripcion

    await producto.save();

    res.json(producto);
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

    const producto = Productos.findOne({
        where: {id}
    });

    if(!producto){
        return res.status(400).json({
            message: `No existe el usuario con el id ${id}`
        });
    };

    res.json(producto);
};