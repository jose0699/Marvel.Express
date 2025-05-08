'use strict';

/** @type {import('sequelize-cli').Migration} */

export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sectors', [
      {
        fk_cities_sector: 1,
        name: 'Caracas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_cities_sector: 2,
        name: 'Bogotá',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_cities_sector: 3,
        name: 'Berlin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_cities_sector: 4,
        name: 'Madrid',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_cities_sector: 5,
        name: 'Roma',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sectors', null, {});
  }
};
