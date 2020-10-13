'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'areas',
      'manager',
      {
        type: Sequelize.STRING,
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('areas', 'manager');
  }
};
