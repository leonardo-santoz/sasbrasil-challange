'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'users',
      'position_id',
      {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'positions',
          referenceKey: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'position_id');
  }
};
