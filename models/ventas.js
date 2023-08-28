import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'

// Definir el modelo de la tabla ventas 
export const Ventas = sequelize.define('ventas', {

    // Columna id para un identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna fecha para establecer la fecha en la que fue realizada la venta
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    },
    // Columna total para saber el precio total de los productos vendidos
    total:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});
