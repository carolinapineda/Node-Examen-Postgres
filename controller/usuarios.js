// import { Usuario } from "../models/usuario.js";
import {Usuario, Roles} from '../models/index.js'

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

    // obtener los datos de la solicitud
    const {nombre, correo, roleid} = req.body
   


    try {

        let role = await Roles.findAll({where:{id:2}})
        
        const newUsuario = await Usuario.create({
            nombre,
            correo,
            roleid: 'user'
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

            // Para cambiar los valores 
            usuario.nombre = nombre,
            usuario.correo = correo,
            usuario.password = password

            // Despues se guardara en la base de datos
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
        // destroy buscar y eliminar al mismo tiempo
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
    //findOne() obtiene la primera entrada que encuentra (que cumple con las opciones de consulta opcionales).
    const usuario = await Usuario.findOne({
        where: {id}
    });

    if(!usuario) 
            return res.status(400).json({
                message: `no existe el usuario con el id ${id}`
            });

    res.json(usuario);
}; 