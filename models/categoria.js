import { DataTypes } from "sequelize"
import {sequelize} from '../database/database.js'

export const Categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_categoria: {
        type: DataTypes.STRING,
        unique: {
            msg: 'Esta categoria ya existe'
        },  
    },
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});
