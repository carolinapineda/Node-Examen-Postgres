import {DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';

// Definir el modelo de la tbala usuarios
export const Usuario = sequelize.define('usuarios', {

    // Columna "id" para un identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    // Columna "nombre" para el nombre del usuario
    nombre: {
        type: DataTypes.STRING,
        // Para no permitir valores nulos
        allowNull: false,
    },

    // Columna "correo" para el correo del usuario
    correo: {
        type: DataTypes.STRING,
        unique: {
            msg: 'Este correo ya existe'
        },  
        // Validaciones personalizadas
        validate: {
            // El correo electronico debe conincidir con la expresion regular
            is: {
                args: [ /^[a-zA-Z0-9._-]+@gmail\.com$/,
                        /^[a-zA-Z0-9._-]+@hotmail\.com$/],
                msg: 'El correo debe de ser @gmail.com'
            },
            // Valida el formato del correo electronico 
            isEmail: {
                msg: 'El correo electronico es invalido',
            }  
        }
    },
    // Columna "password" para la contraseña del usuario
    password: {
        type: DataTypes.INTEGER,
        validate: {
            // La contraseña debe de tener una longitud de 4 a 12 caracteres
            len: {
                args: [4, 12],
                msg: 'La contraseña debe de tener entre 4 a 12 caracteres'
            }
        }
    },
}, {
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
    
});

