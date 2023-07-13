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
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

