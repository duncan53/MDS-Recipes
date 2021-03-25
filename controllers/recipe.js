const Recipe = require('../models/recipe');
const fs = require('fs');

exports.createRecipe = (req, res, next) => {
  let recipe = new Recipe();


  const { name, instruction} = req.body;

  recipe.name = req.body.name;
  recipe.instruction = req.body.instruction;
  recipe.userId = req.userId;

  recipe.save().then(
    () => {
      res.status(201).json({
        message: 'Recipe saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllRecipe = (req, res, next) => {
  Recipe.find().then(
    (recipe) => {
      res.status(200).json({
        recipe: recipe
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getMyRecipe = (req, res, next) => {
  Recipe.find(
    {_id: req.params.id}
  ).then(
    (recipe) => {
      res.status(200).json({
        recipe: recipe
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
