const router = require('express').Router();
const Recipes = require('./recipes-model');
const Dishes = require('../dishes/dishes-model');


// getRecipes

router.get('/', (req, res) => {
    const errorMessage = { message: 'Unable to get recipes' };

    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => { res.status(500).json(errorMessage); });
});

// getRecipeById

router.get('/:id', (req, res) => {
  const errorMessage = { message: 'Unable to get recipe' };

  Recipes
      .getRecipeById(req.params.id)
      .then(recipe => {
        Dishes.getDishes()
        .then(dishes => {
            const { dish_name } = dishes.filter(dish => dish.id == recipe.dish_id)[0];
            dish_name
                ? res.status(200).json({ ...recipe, dish_name})
                : res.status(404).json(message404);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to get dishes'});
        });
      })
      .catch(err => {
          res.status(500).json(errorMessage)
      })
});

// addRecipe

router.post('/' (req, res) => {
  const { recipeName, dishId, instructions } = req.body;

  const errorMessage = { message: 'Unable to create recipe' };

  if (recipeName, dishId, instructions) {
    Recipes.addRecipe(req.body)
      .then( recipe => {
        res.status(201).json(recipe)
      })
      .catch( err => {
        res.status(500).json(errorMessage)
      })
  } else {
    res.status(400).json(errorMessage);;
  }

})

module.exports = router; 