import {DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Productos } from "./producto.js";

export const Usuario = sequelize.define('usuarios', {
    idUsuario: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

Usuario.hasMany(Productos, {
    foreignKey: 'usuarioid',
    sourceKey: 'idUsuario'
});

Productos.belongsTo(Usuario, {
    foreignKey: 'usuarioid',
    sourceKey: 'idProducto'
});