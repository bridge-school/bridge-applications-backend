const faker = require('faker');
const { createSeedData } = require('../seed-data.helpers');

exports.seed = knex => {
  return knex('identifying_info')
    .del()
    .then(() => {
      return knex('identifying_info').insert(
        createSeedData(20, () => ({
          name: faker.name.findName(),
          is_gender_related: faker.random.boolean(),
          user_generated: faker.random.boolean(),
        })),
      );
    });
};
