import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'

export const Roles = sequelize.define('rol', {
    id: {
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
})
