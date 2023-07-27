import {DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';

export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // defaultValue: DataTypes.UUIDV1,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,  
        validate: {
            isEmail: {
                msg: "El correo electronico es invalido"
            }
        }
    },
    password: {
        type: DataTypes.INTEGER,
        validate: {
            // Longitud minima y maxima
            len: {
                args: [4, 12],
                msg: "La contraseña debe de tener entre 4 a 12 caracteres"
            }
        }
    },
}, {
    timestamps: false
});

