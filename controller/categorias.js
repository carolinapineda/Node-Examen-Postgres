import { sequelize } from '../database/database.js';
import {Categorias} from '../models/categoria.js'

export const getCategoria = async(req, res) => {

    const categoria = await Categorias.findAll();
    res.json(categoria);
};


export const postCategoria = async(req, res) => {

    const {nombre} = req.body;

    const newCategoria = await Categorias.create({
        nombre: sequelize.literal(`UPPER('${nombre}')`)
    });

    if(newCategoria){
        return res.status(400).json({message: `La categoria ${nombre} ya existe`})
    }

    res.json(newCategoria);
};


export const putCategoria = async(req, res) => {

    const {id} = req.params;
    const {nombre} = req.body;

    const categoria = await Categorias.findByPk(id);

    categoria.nombre = sequelize.literal(`UPPER('${nombre}')`)

    await categoria.save();

    res.json(await Categorias.findOne({where: {id}}));
};


export const deleteCategoria = async(req, res) => {

    const {id} = req.params;

    await Categorias.destroy({
        where: {id}
    });

    res.json({message: `Se elimino correctamentge la categoria con el id ${id}`})

};


export const getCategoriaPorId = async(req, res) => {
    
    const {id} = req.params;

    const categoria = await Categorias.findOne({
        where: {id}
    });

    if(!categoria){
        return res.status(400).json({
            message: `No existe el usuario con el id ${id}`
        });
    };

    res.json(categoria);
};