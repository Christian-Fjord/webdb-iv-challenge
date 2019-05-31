const router = require('express').Router();
const Recipes = require('./recipes-model');


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
      .then(dish => {
          dish
              ? res.status(200).json(dish)
              : res.status(404).json(errorMessage);
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