const db = require('../config/connection');
const { User, Pizza, Order, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const pizzaSeeds = require('./pizzaSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    
    await cleanDB('Category', 'categories');
    await cleanDB('Pizza', 'pizzas');
    await cleanDB('User', 'users');
    await cleanDB('Order', 'orders');

    // Insert category seeds
    await Category.create(categorySeeds);
    console.log('Categories seeded');

    // Insert pizza seeds
    await Pizza.create(pizzaSeeds);
    console.log('Pizzas seeded');

    // Insert user seeds
    for (let i = 0; i < userSeeds.length; i++) {
      const user = new User(userSeeds[i]);
      await user.save();
    }
    console.log('Users seeded');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});
