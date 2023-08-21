'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [
      {
        rol: 'DESARROLLADOR'
      },
      {
        rol: 'ANALISTA'
      },
      {
        rol: 'MARKETING'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('roles', null, {});
  }
};
