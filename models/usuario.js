import {DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Productos } from "./producto.js";

export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'USER_ROLE'
    }
}, {
    timestamps: false
});

// hasMany relacion de uno a muchos
Usuario.hasMany(Productos, {
    foreignKey: 'usuarioid',
    sourceKey: 'id'
});

// belongsTo relacion de uno a uno
Productos.belongsTo(Usuario, {
    foreignKey: 'usuarioid',
    sourceKey: 'id'
});