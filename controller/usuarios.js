import {Usuario} from '../models/index.js'


export const getUsuario = async(req, res) => {

    try {
        
        const usuario = await Usuario.findAll();
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};

// Funcion para crear un usuario en la base de datos
export const postUsuario = async(req, res) => {

    // Obtener los datos del cuerpo la solicitud
    const {nombre, correo, password, role_id} = req.body
   
    try {
        
        // Crear un nuevo registro de usuario en la base de datos usando el modelo 'Usuario'
        const newUsuario = await Usuario.create({
            nombre,
            correo,
            password,
            role_id
    });

        // Respuesta con el objeto del nuevo usuario en formato JSON
        res.json(newUsuario);

    } catch (error) {
        // En caso de un error, responde un codigo de estado 500(Error del servidor) y lanza un mensaje de error en formato Json
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