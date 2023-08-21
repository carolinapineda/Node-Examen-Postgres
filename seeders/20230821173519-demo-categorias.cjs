'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categorias', [
      {
        nombre_categoria: 'ARTICULOS PARA EL HOGAR'
      },
      {
        nombre_categoria: 'PRODUCTOS DE CUIDADO PERSONAL'
      },
      {
        nombre_categoria: 'ELECTRONICOS Y ACCESORIOS'
      }
  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categorias', null, {});
  }
};
