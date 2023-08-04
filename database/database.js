import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'Tienda',  //Nombre de la base de datos
    'postgres',  //Nombre de usuario
    'postgres',  //Contraseña
    {
        host: 'localhost',  //Anfitrion de la base de datos
        dialect: 'postgres'  //Dialecto de la base de datos
    }
);