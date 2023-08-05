import { DataTypes } from "sequelize"
import {sequelize} from '../database/database.js'

export const Categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false,

    // Genera claves foreaneas de este tipo role_id en vez de roleid
    underscored: true
});
