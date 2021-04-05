const Recipe = require('../models/recipe');

module.exports = (req, res, next) => {
  try {

    Recipe.findOne({
      _id: req.params.id
    }).then(
      (recipe) => {
        if (recipe.userId == req.body.userId) {
          next();
        } else {
          res.status(401).json({
            error: 'Its not your recipe'
          });
        }
      }
    )

  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
};
