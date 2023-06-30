import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'

export const Producto = sequelize.define('productos', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DOUBLE
    },
    descripcion: {
        type: DataTypes.STRING
    },
    disponible: {
        type: DataTypes.BOOLEAN
    }

}, {
    timestamps: false
})