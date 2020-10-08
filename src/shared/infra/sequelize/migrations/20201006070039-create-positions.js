'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'positions',
      {
        id: {
          allowNull: false,
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.fn('uuid_generate_v4')
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          default: 'now()'
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          default: 'now()'
        }
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('positions')
  }
};
