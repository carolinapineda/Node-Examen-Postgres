
import {Roles, Usuario} from '../models/index.js'

// Controlador para obtener todos los usuarios
export const getUsuario = async(req, res) => {

    
    
    try {
        // Consultar la base de datos para obtener todos los usuarios
        const usuarios = await Usuario.findAll({
            include:{
                model: Roles,
                as: 'role_i',
                attributes: { exclude: ['id'] }
            },
            raw:true
            

        })

        console.log(usuarios)

        const transformedUsers = usuarios.map(user => {
            return {
              ...user,
            //   role_id: ['rol']// Usar la notación de corchetes para acceder al valor anidado
            };
          });
        
        // Responder con los usuarios obtenidos en formato JSON
        res.json(usuarios);
        // console.log(transformedUsers)
       
    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    };
};

// Controlador para crear un usuario en la base de datos
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

// Controlador para actualizar un usuario por medio del id 
export const putUsuario = async(req, res) => {
        // Obtener el id del usuario de los parametros de la url
        const {id} = req.params;
        try {
             // Obtener los datos del cuerpo la solicitud
            const {nombre, correo, password} = req.body
            // Buscar el usuario por su id en la base de datos
            const usuario = await Usuario.findByPk(id);

            // Actualizar los atributos del usuario 
            usuario.nombre = nombre,
            usuario.correo = correo,
            usuario.password = password

            // Guardar los cambios en la base de datos
            await usuario.save();
            // Responder con el usuario actualizado en formato JSON
            res.json(usuario);

        } catch (error) {
            // Manejar errores y responder con un estado de error y un mensaje
            return res.status(500).json({
            message: error.message
        });
    }
        
};

// Controlador para borrar un usuario por su id 
export const deleteUsuario = async(req, res) => {
    
    // Obetener el id del usuario de los parametros de la url 
    const {id} = req.params;
   
    try {
        // destroy buscar y eliminar al mismo tiempo
        // Elimina el usuario de l abse de datos
        await Usuario.destroy({
            where: {
                id,
            }
        });
        // Responde con un mensaje indicando la eliminacion del usuario
        res.json({
            message: `Se elimino correctamente el usuario con id ${id}`
        })
       
    } catch (error) {
         // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    }
};

// Controlador para obetener a un usuario por medio de su id 
export const getUsuarioPorId = async(req, res) => {

    // Obetener el id del usuario de los parametros de la url 
    const {id} = req.params;

    //findOne() obtiene la primera entrada que encuentra (que cumple con las opciones de consulta opcionales).
    // Busca un usuario por su id en la base de datos 
    const usuario = await Usuario.findOne({
        where: {id}
    });

    // Verifica si se encontro el usuario
    if(!usuario) 
            return res.status(400).json({
                message: `no existe el usuario con el id ${id}`
            });

    // Respuesta con el usuario encontrado en formato JSON
    res.json(usuario);
}; 

// Controlador para obtener todos los usuarios pero con informacion especifica
export const getUsuarioInfo = async(req, res) => {

    const {nombre, correo, role_id} = req.body;
}