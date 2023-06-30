import { DataTypes } from "sequelize"
import {sequelize} from '../database/database.js'

export const Categoria = sequelize.define('categorias', {
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