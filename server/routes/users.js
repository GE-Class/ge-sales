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

module.exports = router;
