'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkCreate('usuarios', [{
      nombre: 'Ximena',
      correo: 'ximena@gmail.com',
      password: 1234
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
