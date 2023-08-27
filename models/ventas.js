import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'

export const Ventas = sequelize.define('ventas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    },
    total:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    contidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});