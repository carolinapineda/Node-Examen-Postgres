import { sequelize } from "../database/database.js";
import { Categorias } from "../models/categoria.js";
import { Productos } from "../models/producto.js";
import { Usuario } from "../models/usuario.js";

// Controlador para obtener todos los productos
export const getProducto = async(req, res) => {
    
    try {
        // Consultar la base de datos para obtener todos los productos
        const producto = await Productos.findAll({
            // Excluir los atributos usuario_id y categoria_id del modelo productos
            attributes: {exclude: ['usuario_id', 'categoria_id']}, 
            include: [
                {
                    model: Categorias,  //Incluir la informacion del modelo categorias asociado a productos
                    attributes: [['nombre_categoria', 'nombre']]  //Incluir solo el atributo nombre_categoria del modelo Categorias
                },     
                {
                    model: Usuario,  //Incluir la informacion del modelo usuarios asociado a productos
                    attributes: ['nombre']  //Incluir solo el atributo nombre del modelo Usuarios
                }
            ],
            raw:true  // Devolver los datos en formato plano
        });

        // Responder con los productos obtenidos en formato JSON
        res.json(producto);
       
    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    };
};

//Controlador para crear un producto en la base de datos
export const postProducto = async(req, res) => {

     // Obtener los datos del cuerpo de la solicitud
     const {nombre, precio, descripcion, categoria_id, usuario_id} = req.body;
    try {
    
        // Crear un nuevo registro de producto en la base de datos usando el modelo 'Productos'
        const newProducto = await Productos.create({
            // Convertir el nombre y la descripción a mayúsculas antes de almacenarlos
            nombre: sequelize.literal(`UPPER('${nombre}')`),
            precio,
            descripcion: sequelize.literal(`UPPER('${descripcion}')`),
            categoria_id,
            usuario_id
        });

        // Enviar el producto creado como respuesta json
        res.json(newProducto);

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        }); 
    };  
};

// Controlador para actualizar un productos por medio de su id 
export const putProducto = async(req, res) => {

    try {
        // Obtener el id del producto de los parametros de la url
        const {id} = req.params;
        // Obtener los datos del cuerpo la solicitud
        const {nombre, precio, descripcion, categoria_id, usuario_id} = req.body;

        // Buscar el producto por su id en la base de datos
        const producto = await Productos.findByPk(id);
            // Actualizar los atributos del producto
            producto.nombre = sequelize.literal(`UPPER('${nombre}')`),
            producto.precio = precio,
            producto.descripcion = sequelize.literal(`UPPER('${descripcion}')`),
        
        // Guardar los cambios en la base de datos
        await producto.save();

        // Responder con el producto actualizado en formato JSON
        res.json(await Productos.findOne({where:{id}}));

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        }); 
    };
};

// Controlador para eliminar un producto por medio de su id 
export const deleteProducto = async(req, res) => {

    try {
        // Obtener el id del producto de los parametros de la url
        const {id} = req.params;

        // Eliminar el producto de la base de datos por medio del id
        await Productos.destroy({
            where: {id}
        });
            // Respuesta con el producto encontrado en formato JSON
            res.json({message: `Se elimino correctamente el producto con el id ${id}`})

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        }); 
    };
};

// Controlador para obtener el producto por medio de su id 
export const getProductoPorId = async(req, res) => { 

    try {
        // Obtener el id del producto de los parametros de la url
        const {id} = req.params;

        // Buscar al producto en la base de datos por medio de su id
        const producto = await Productos.findOne({
            where: {id}
        });

        // Verifica si se encontro el producto
        if(!producto){
            return res.status(400).json({
                message: `No existe el usuario con el id ${id}`
            });
        };

        // Respuesta con el producto encontrado en formato JSON
        res.json(producto);

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    };
};

// Controlador para traer los productos con informacion especifica
export const infoProducto = async(req, res) =>{

    try {

        // Consultar la base de datos para traer todos los productos
        const producto = await Productos.findAll({
            // Excluir los atributos del modelo productos
            attributes: {exclude: ['descripcion', 'usuario_id', 'categoria_id']},
            include: {
                model: Categorias, //Incluir la informacion de categorias asociado a productos
                attributes: [['nombre_categoria', 'nombre']],  // Incluir solo el atributo nombre_categoria y asignarle un alias
            },
            raw: true  // Devolver los datos en formato plano
        });
        
        // Respuesta con los productos encontrados en formato JSON
        res.json(producto);

    } catch (error) {
        // Manejar errores y responder con un estado de error y un mensaje
        return res.status(500).json({
            message: error.message
        });
    };
};


export const infoProductoPorIdCategoria = async(req, res) => {

    try {
        // Obtener el id de los parametros de la url
        const {id} = req.params;

        // Consultar la base de datos para traer todos los productos
        const producto = await Productos.findAll({
            attributes: {exclude: ['descripcion', 'usuario_id', 'categoria_id']}, //Excluir el atributo descripcion y usuario_id del modelo productos
            include: {
                model: Categorias, //Incluir la informacion de categorias asociado a productos
                attributes: [['nombre_categoria', 'nombre']],  // Incluir el atributo nombre_categoria y darle un alias
                where: {id}
            },
            raw: true  // Devolver los datos en formato plano
        });

        // Obtener el número de elementos que devuelve la consulta
        const numero = producto.length;

        // Verificar si hay coincidencias o no
        if (numero) {
            res.json(producto);

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