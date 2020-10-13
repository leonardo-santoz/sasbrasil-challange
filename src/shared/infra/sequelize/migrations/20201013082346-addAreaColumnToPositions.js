'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'positions',
      'area',
      {
        type: Sequelize.STRING,
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('positions', 'area');
  }
};
