'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          text: 'Купить молоко',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Подобрать чек',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Обналичить чек',
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
