import { DataTypes } from "sequelize"
import {sequelize} from '../database/database.js'
import { Productos } from "./producto.js";

export const Categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    nombre: {
        type: DataTypes.STRING
    },
},{
    timestamps: false
});

// Relacion de uno a muchos
// Categorias.hasMany(Productos);