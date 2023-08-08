import { DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'

export const Roles = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    rol: {
        type: DataTypes.STRING,
        // Se verifica que este campo no quede en null
        allowNull: false
    }
}, {
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});


