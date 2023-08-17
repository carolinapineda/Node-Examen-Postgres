'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Categorias', 'nombre', 'categoria');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Categorias', 'nombre', 'categoria');
  }
};
