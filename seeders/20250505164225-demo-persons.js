'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('persons', [
      {
        first_name: 'Stan',
        last_name: 'Lee',
      },
      {
        first_name: 'Jack',
        last_name: 'Kirby',
      },
      {
        first_name: 'Bob',
        last_name: 'Kane',
      },
      {
        first_name: 'Bill',
        last_name: 'Finger',
      },
      {
        first_name: 'Joe',
        last_name: 'Simon',
      },
      {
        first_name: 'Will',
        last_name: 'Eisner',
      },
      {
        first_name: 'Frank',
        last_name: 'Miller',
      },
      {
        first_name: 'Alan',
        last_name: 'Moore',
      },
      {
        first_name: 'John',
        last_name: 'Romita',
      },
      {
        first_name: 'Robert',
        last_name: 'Downey Jr.',
      },
      {
        first_name: 'Chris',
        last_name: 'Evans',
      },
      {
        first_name: 'Chris',
        last_name: 'Hemsworth',
      },
      {
        first_name: 'Scarlett',
        last_name: 'Johansson',
      },
      {
        first_name: 'Mark',
        last_name: 'Ruffalo',
      },
      {
        first_name: 'Jeremy',
        last_name: 'Renner',
      },
      {
        first_name: 'Tom',
        last_name: 'Holland',
      },
      {
        first_name: 'Benedict',
        last_name: 'Cumberbatch',
      },
      {
        first_name: 'Samuel',
        last_name: 'L. Jackson',
      },
      {
        first_name: 'Tom',
        last_name: 'Hiddleston',
      },
      {
        first_name: 'Chris',
        last_name: 'Pratt',
      },
      {
        first_name: 'Zoe',
        last_name: 'Saldana',
      },
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('persons', null, {});
  }
};
