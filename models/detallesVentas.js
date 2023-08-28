import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from '../database/database.js'

// Definir el modelo de la tabla detallesVentas 
export const DetallesVentas = sequelize.define('detalles_ventas', {

    // Columna id para identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna nombre para saber la cantidad de productos vendidos
    cantidad_venta: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});