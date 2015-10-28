var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res){
  models.User.create({
    title: req.body.title,
    age: req.body.age,
    name: req.body.name,
    gender: req.body.gender,
  }).then(function(response) {
    res.send(response.dataValues);
  });
});

router.get('/', function(req, res){
  models.User.findAll().then(function(response) {
    res.send(response);
  });
});

router.delete('/:id', function(req, res){
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(affectedRows){
    res.send(req.params.id);
  });
});

module.exports = router;
