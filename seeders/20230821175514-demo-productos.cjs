'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('productos', [
      {
        nombre: 'BOING',
        precio: 16,
        descripcion: 'JUGO DE MANZANA DE 500ML',
        categoria_id: 15,
        usuario_id: 10
      },
      {
        nombre: 'EMPERADOR',
        precio: 14.50,
        descripcion: 'GALLETAS TIPO SÁNDWICH CON UN DELICIOSO RELLENO SABOR A CHOCOLATE',
        categoria_id: 13,
        usuario_id: 12
      },
      {
        nombre: 'RUFFLES',
        precio: 15.50,
        descripcion: 'PAPAS FRITAS ONDULADAS SABOR QUESO 45G',
        categoria_id: 14,
        usuario_id: 13
      },
      {
        nombre: 'CHEETOS',
        precio: 13.50,
        descripcion: 'CHEETOS FLAMIN HOT 52G',
        categoria_id: 14,
        usuario_id: 11
      },
      {
        nombre: 'JARRITOS',
        precio: 18.50,
        descripcion: 'REFRESCO JARRITOS SABOR MANDARINA 2L',
        categoria_id: 15,
        usuario_id: 10
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('productos', null, {});
  }
};
