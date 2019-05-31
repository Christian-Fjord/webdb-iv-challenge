const router = require('express').Router();
const Dishes = require('./dishes-model');


// getDish

router.get('/', (req, res) => {
    const errorMessage = { message: 'Unable to get dishes' };

    Dishes.find()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(error => {
            res
                .status(500)
                .json(errorMessage);
        });
});

// getDishById

router.get('/:id', (req, res) => {
  const errorMessage = { message: 'Unable to get dishe' };

  Dishes
    getDishesById(req.params.id)
      .then( dish => {
        res.status(200).json(dish)
      })
      .catch( err => {
        res.status(500).json(errorMessage)
      })
});

// addDish

router.post('/', (req, res) => {
  const dishName = req.body;

  const errorMessage = { message: 'Unable to create dishe' };

  if (dishName) {
    Dishes.addDish(req.body)
      .then( dish => {
        res.status(201).json(dish)
      })
      .catch( err => {
        res.status(500).json(errorMessage)
      })
  } else {
    res.status(400).json(errorMessage);
  }
})

module.exports = router; 