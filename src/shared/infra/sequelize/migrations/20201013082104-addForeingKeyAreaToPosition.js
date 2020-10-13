'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'positions',
      'area_id',
      {
        type: Sequelize.UUID,
        references: {
          model: 'areas',
          referenceKey: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('positions', 'area_id');
  }
};
