'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario', [{
      nombre: 'Carolina',
      correo: 'caro1@gmail.com',
      password: 1234,
      role_id: 1
      
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuario', null, {});

  }
};
