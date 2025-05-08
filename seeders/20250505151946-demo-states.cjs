'use strict';

/** @type {import('sequelize-cli').Migration} */

export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [
      {
        fk_countries_states: 1,
        name: 'Capital District',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_countries_states: 2,
        name: 'Capital District of Bogotá',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_countries_states: 3,
        name: 'federated state',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_countries_states: 4,
        name: 'Community of Madrid',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_countries_states: 5,
        name: 'Lazio Region',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {});
  }
};
