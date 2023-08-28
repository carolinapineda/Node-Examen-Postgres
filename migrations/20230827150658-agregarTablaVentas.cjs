'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ventas',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fecha:{
        type: Sequelize.DATE,
        allowNull: false
      },
      total:{
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
    });

    await queryInterface.addColumn('ventas', 'usuario_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    });

    await queryInterface.addConstraint('ventas', {
      fields: ['usuario_id'],
      type: 'foreign key',
      name: 'usuario_id',
      references: {
        table: 'usuarios',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('ventas');
  }
};
