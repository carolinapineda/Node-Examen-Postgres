import { DataTypes } from "sequelize"
import {sequelize} from '../database/database.js'
import { Productos } from "./producto.js";

export const Categorias = sequelize.define('categorias', {
    idCategoria: {
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

Categorias.hasMany(Productos, {
    foreignKey: 'categoriaid',
    sourceKey: 'idCategoria'
});

Productos.belongsTo(Categorias, {
    foreignKey: 'categoriaid',
    sourceKey: 'idProducto'
});