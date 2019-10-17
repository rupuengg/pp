const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'admin@yopmail.com',
      password: await bcrypt.hash("admin", 10),
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now')
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
