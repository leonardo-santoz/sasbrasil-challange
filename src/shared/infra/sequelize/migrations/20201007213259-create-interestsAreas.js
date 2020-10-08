'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'interests_areas',
      {
        user_id: {
          type: Sequelize.UUID,
          references: {
            model: 'users',
            referencekey: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        area_id: {
          type: Sequelize.UUID,
          references: {
            model: 'areas',
            referencekey: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('interests_areas')
  }
};
