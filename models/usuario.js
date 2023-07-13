import {DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Roles } from "./rol.js";

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
}, {
    timestamps: false
});

Usuario.belongsTo(Roles);
