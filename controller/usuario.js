import { UUID } from "sequelize";
import { Usuario } from "../models/usuario.js";

export const getUsuario = async(req, res) => {

    try {
        // findAll hace que de todas las filas el trata de recorrerlas y genera un arreglo
        const usuario = await Usuario.findAll();
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};

export const postUsuario = async(req, res) => {

    const {nombre, correo, password} = req.body

    try {
        // Para crear un usuario
        const newUsuario = await Usuario.create({
            nombre,
            correo,
            password
        });

        res.json(newUsuario);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const putUsuario = async(req, res) => {
    
        const {id} = req.params;
        try {
            const {nombre, correo, password} = req.body

            const usuario = await Usuario.findByPk(id);

            usuario.nombre = nombre,
            usuario.correo = correo,
            usuario.password = password

            await usuario.save();

            res.json(usuario);

        } catch (error) {
            return res.status(500).json({
            message: error.message
        });
    }
        
};

export const deleteUsuario = async(req, res) => {
    
    const {id} = req.params;
   
    try {
        await Usuario.destroy({
            where: {
                id,
            }
        });
        res.json({
            message: `Se elimino correctamente el usuario con id ${id}`
        })
       
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getUsuarioPorId = async(req, res) => {
    
    const {id} = req.params;
    const usuario = await Usuario.findOne({
        where: {id}
    });

    if(!usuario) 
            return res.status(400).json({
                message: `no existe el usuario con el id ${id}`
            })

    res.json(usuario);
}; 