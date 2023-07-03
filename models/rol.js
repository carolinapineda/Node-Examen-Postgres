import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Usuario } from "./usuario.js";

export const Roles = sequelize.define('roles', {
    idRole: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'USER_ROLE'
    }
}, {
    timestamps: false
});

Roles.hasMany(Usuario, {
    foreignKey: 'roleid',
    sourceKey: 'idRole'
});

Usuario.belongsTo(Roles, {
    foreignKey: 'roleid',
    sourceKey: 'idUsuario'
});
