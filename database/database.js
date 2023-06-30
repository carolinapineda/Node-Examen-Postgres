import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'Tienda',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);