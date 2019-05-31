const db = require('../data/dbConfig');

module.exports = {
  getDishes,
  getDishById,
  addDish,
  deleteDish,
  updateDish
};

function getDishes() {
  return db('dishes');
}

function getDishById(id) {
  return db('dishes').where({ id }).first();
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}