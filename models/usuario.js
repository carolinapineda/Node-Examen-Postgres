import {DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Productos } from "./producto.js";
import { Roles } from "./rol.js";

// const Usuario2 = Usuario;
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
// Usuario.hasMany(Productos, {
//     foreignKey: 'usuarioId', 
//     sourceKey: 'id'
// });

// // belongsTo relacion de uno a uno
// Productos.belongsTo(Usuario, {
//     foreignKey: 'usuarioId',
//     sourceKey: 'id'
// });

// Usuario.belongsTo(Roles, {
//     foreignKey: 'roleId',
//     sourceKey: 'id'
// });

// // belongsTo relacion de uno a uno
// Roles.belongsTo(Usuario, {
//     foreignKey: 'usuarioId',
//     sourceKey: 'id'
// });