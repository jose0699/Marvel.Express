'use strict';

/** @type {import('sequelize-cli').Migration} */

export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cities', [
      {
        fk_states_cities: 1,
        name: 'Chacao',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 1,
        name: 'La Candelaria',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 2,
        name: 'La Candelaria',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 2,
        name: 'Usaquén',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 3,
        name: 'Mitte',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 3,
        name: 'Kreuzberg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 4,
        name: 'Centro Storico',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 4,
        name: 'Trastevere',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 5,
        name: 'Centro Storico',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fk_states_cities: 5,
        name: 'Trastevere',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {});
  }
};
