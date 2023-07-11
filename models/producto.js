import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Categorias } from "./categoria.js";
import { Usuario } from "./usuario.js";

export const Productos = sequelize.define('productos', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    timestamps: false
});

