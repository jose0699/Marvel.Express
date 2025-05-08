'use strict';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('countries', [
      {
        name: 'Venezuela',
        nationality: 'Venezuelan',
        continent: 'SA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Colombia',
        nationality: 'Colombian',
        continent: 'SA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Germany',
        nationality: 'German',
        continent: 'EU',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Spain',
        nationality: 'Spanish',
        continent: 'EU',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Italy',
        nationality: 'Italian',
        continent: 'EU',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('countries', null, {});
  }
};
