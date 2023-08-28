'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('detalles_ventas',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cantidad_venta:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });

    await queryInterface.addColumn('detalles_ventas', 'ventas_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'ventas',
        key: 'id'
      }
    });

    await queryInterface.addColumn('detalles_ventas', 'producto_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'productos',
        key: 'id'
      }
    });

    await queryInterface.addConstraint('detalles_ventas', {
      fields: ['ventas_id'],
      type: 'foreign key',
      name: 'ventas_id',
      references: {
        table: 'ventas',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('detalles_ventas', {
      fields: ['producto_id'],
      type: 'foreign key',
      name: 'producto_id',
      references: {
        table: 'productos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('detalles_ventas');
  }
};
