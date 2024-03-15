'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      [
        {
          name: 'Чингиз',
          thanks: 999,
          phase: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Марк',
          thanks: 99,
          phase: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Костя',
          thanks: 9,
          phase: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
