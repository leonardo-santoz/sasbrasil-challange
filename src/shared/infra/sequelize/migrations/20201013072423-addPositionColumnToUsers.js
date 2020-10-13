'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'users',
      'position',
      {
        type: Sequelize.STRING,
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'position');
  }
};
