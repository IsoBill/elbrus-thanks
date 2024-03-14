'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Alex',
          login: 'Alex1337',
          email: 'Alex@mail.ru',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mark',
          login: 'Mark211',
          email: 'Mark@mail.ru',
          password: '456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John',
          login: 'John78',
          email: 'John@mail.ru',
          password: '789',
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
