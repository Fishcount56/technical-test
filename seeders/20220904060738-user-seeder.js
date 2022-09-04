'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'admin01@email.com',
          password: '$2a$10$7dWx0Ud5dEFSFcXq5UjBY.Gx1BcTaLv67NjwwFjkroaydh09XNaEi', //123456,
          username: 'admin',
          role: 'admin'
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
