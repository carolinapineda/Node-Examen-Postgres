import {Roles, Usuario} from '../models/index.js'

// Controlador para obtener todos los usuarios
export const getUsuario = async(req, res) => {

    try {
        // Consultar la base de datos para obtener todos los usuarios
        const usuarios = await Usuario.findAll({
            include:{
                model: Roles,  //Incluir la informacion de roles asociado a usuarios
                attributes: ['rol']  //Incluir solo el atributo rol del modelo asociado Roles  
            },
            raw:true  // Devolver los datos en formato plano
        });

        // Funcion para retornar los usuarios y cambiarle el valor a mi atributo role_id
        const transformarUsuario = usuarios.map(user => {
            return {
                ...user,  //Retorna todos los atributos del usuario 
                role_id: user['rol']  //Agrega un nuevo atributo con el valor de rol
            };
          });

        // Responder con los usuarios obtenidos en formato JSON
        res.json(transformarUsuario);
       
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
    const usuario = await Usuario.findAll({
        include: {
            model:Roles,   //Incluir la informacion de roles asociado a usuarios
            attributes: ['rol']  //Incluir solo el atributo rol del modelo asociado Roles  
        },
        where: {id},
        raw: true   // Devolver los datos en formato plano
    });

    const numero = usuario.length;

    // Verifica si se encontro el usuario
    if(!numero) 
            return res.status(400).json({
                message: `no existe el usuario con el id ${id}`
            });

    // Funcion para retornar los usuarios y cambiarle el valor a mi atributo role_id
    const transformar = usuario.map(user => {
        return {
            ...user,  //Retorna todos los atributos del usuario 
            role_id: user['rol']  //Agrega un nuevo atributo con el valor de rol
        };
      });

    // Respuesta con el usuario encontrado en formato JSON
    res.json(transformar);
}; 

// Controlador para obtener todos los usuarios pero con informacion especifica
export const usuarioInfo = async(req, res) => {

    try {
        // Consulta la base de datos para obtener todos los usuarios
        const usuarios = await Usuario.findAll({
            attributes: {exclude: ['password']},  //Excluir solo el atributo password del modelo Usuario
            include:{
                model: Roles,   //Incluir la informacion de roles asociado a usuarios
                attributes: ['rol'],  //Incluir solo el atributo rol del modelo asociado Roles  
            },
            raw: true  // Devolver los datos en formato plano
        });

        // Funcion para retornar los usuarios y cambiarle el valor a mi atributo role_id
        const transformarUsuario = usuarios.map(user => {
            return {
                ...user,  //Retorna todos los atributos del usuario 
                role_id: user['rol']  //Agrega un nuevo atributo con el valor de rol
            };
          });

        // Responder con los usuarios obtenidos en formato JSON
        res.json(transformarUsuario)
    
    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    };
};

// Controlador para obtener los usuarios por medio de su id de Roles 
export const usuarioInfoPorIdRol = async(req, res) => {
    try {
        // Obtener el id del modelo Roles de los parametros de la url
        const {id} = req.params;

        // Consultar la base de datos para obtener el usuario con informaion especifica por medio del id del modelo Roles
        const usuario = await Usuario.findAll({
            attributes: {exclude: ['password']},  //Excluir solo el atributo password del modelo Usarios
            include:{
                model: Roles,  //Incluir la informacion de roles asociado a usuarios
                attributes: ['rol'],  //Incluir solo el atributo rol del modelo Roles
                where:{id}  
            },
            raw: true  // Devolver los datos en formato plano
        });

        // Obtener el número de elementos que devuelve la consulta
        const numero = usuario.length;

        // Verificar si hay coincidencias o no
        if (numero) {
            // Hay coincidencias, transformar el resultado y responder con los usuarios obtenidos en formato JSON
            res.json(usuario.map(user => ({
                ...user,
                role_id: user['rol'] // Acceder al atributo rol del alias rol
            })));

        } else {

          // No hay coincidencias, responder con un estado de error y un mensaje
          return res.status(400).json({
            message: `No se encontraron resultados con el id ${id}`
          });
        }

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    };
};