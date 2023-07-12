import { DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'

export const Roles = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    rol: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false
});


