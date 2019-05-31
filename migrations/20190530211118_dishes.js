exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    
    tbl.increments(); // pass the name if you wanted to be called anything other than id
    tbl
      .string('dish', 255)
      .notNullable()
      .unique();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};


