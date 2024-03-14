'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash('123', 10);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'admin',
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
