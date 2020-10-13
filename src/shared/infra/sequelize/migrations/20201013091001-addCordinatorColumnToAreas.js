'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'areas',
      'cordinator',
      {
        type: Sequelize.STRING,
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('areas', 'cordinator');
  }
};
