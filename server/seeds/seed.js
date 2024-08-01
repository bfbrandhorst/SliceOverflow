const db = require('../config/connection');
const { Pizza } = require('../models');
const pizzaSeeds = require('./pizzaSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    
    await cleanDB('Pizza', 'pizzas');

    await Pizza.create(pizzaSeeds);
    console.log('Pizzas seeded');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});

