import { where } from "sequelize";
import { sequelize } from "../database/database.js";
import { Productos } from "../models/producto.js";

export const getProducto = async(req, res) => {
    
    const productos = await Productos.findAll();
    res.json(productos);
};


export const postProducto = async(req, res) => {

    const {nombre, precio, descripcion} = req.body;

    const newProducto = await Productos.create({
        // sequelize.literal() Permite incluir expresiones SQL literales en tus consultas sin ser modificadas ni escapadas por Sequelize.
        // UPPER() es una función incorporada de PostgreSQL (un motor de base de datos compatible con Sequelize) que convierte una cadena de texto en mayúsculas.
        // Usamos las comillas (') para asegurarnos de que Sequelize entienda que ${nombre} es una variable y debe ser reemplazada por su valor real al momento de ejecutar la consulta.
        nombre: sequelize.literal(`UPPER('${nombre}')`),
        precio,
        descripcion: sequelize.literal(`UPPER('${descripcion}')`)
    });

    res.json(newProducto);
};


export const putProducto = async(req, res) => {

    const {id} = req.params;

    const {nombre, precio, descripcion} = req.body;

    const producto = Productos.findOne({where:{id}});

    if(producto){
        await producto.update({
            nombre: sequelize.literal(`UPPER('${nombre}')`),
            precio: precio,
            descripcion: sequelize.literal(`UPPER('${descripcion}')`),
        });
    };

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