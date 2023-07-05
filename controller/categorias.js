import {Categorias} from '../models/categoria.js'

export const getCategoria = async(req, res) => {

    const categoria = await Categorias.findAll();
    res.json(categoria);
};


export const postCategoria = async(req, res) => {

    const {nombre} = req.body;

    const newCategoria = Categorias.create({
        nombre
    });

    res.json(newCategoria);
};


export const putCategoria = async(req, res) => {

    const {id} = req.params;
    const {nombre} = req.body;

    const categoria = await Categorias.findByPk(id);

    categoria.nombre = nombre

    await categoria.save();

    res.json(categoria);
};


export const deleteCategoria = async(req, res) => {

};


export const getCategoriaPorId = async(req, res) => {

};