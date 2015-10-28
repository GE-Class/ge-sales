var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res){
  models.Product.create({
    name: req.body.name,
    image: req.body.image,
    cost: req.body.cost,
  }).then(function(response) {
    res.send(response.dataValues);
  });
});

router.get('/', function(req, res){
  models.Product.findAll().then(function(response) {
    res.send(response);
  });
});

router.delete('/:id', function(req, res){
  models.Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(affectedRows){
    res.send(req.params.id);
  });
});

module.exports = router;
