import { DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'
import { Usuario } from "./usuario.js";

export const Roles = sequelize.define('roles', {
    idRole: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'USER_ROLE'
    }
}, {
    timestamps: false
});

// hasMany relacion de uno a muchos
Roles.hasMany(Usuario, {
    foreignKey: 'roleid',
    sourceKey: 'idRole'
});

// belongsTo relacion de uno a uno
Usuario.belongsTo(Roles, {
    foreignKey: 'roleid',
    sourceKey: 'idUsuario'
});


