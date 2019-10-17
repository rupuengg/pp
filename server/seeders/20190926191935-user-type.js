'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_types', [{
      key: 'admin',
      title: 'Admin',
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now')
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_types', null, {});
  }
};
