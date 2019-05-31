exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
   
    tbl.increments(); 
    tbl
      .string('ingredientName', 255)
      .notNullable()
      .unique();
    
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};