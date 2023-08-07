



// /** @type {import('sequelize-cli').Migration} */

// Se ejecuta cundo se hace el seeder
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [{
      nombre: 'Carolina',
      correo: 'caro1@gmail.com',
      password: 1234,
      role_id: 1
      
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', null, {});
  }
};

