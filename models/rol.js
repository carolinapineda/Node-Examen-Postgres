import { DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'
import { Usuario } from "./usuario.js";

export const Roles = sequelize.define('roles', {
    id: {
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


