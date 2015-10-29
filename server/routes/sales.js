var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res){
  models.Sale.create({
    date: req.body.date,
    amount: req.body.amount,
    quantity: req.body.quantity,
    user_id: req.body.user_id,
    product_id: req.body.product_id
  }).then(function(response) {
    res.send(response.dataValues);
  });
});

router.get('/', function(req, res){
  models.Sale.findAll().then(function(response) {
    res.send(response);
  });
});

router.get('/:sale_id', function(req, res){
  models.Sale.find({
    where: {id: req.params.sale_id},
    include: [models.User, models.Product],
    limit: 1
  }).then(function(response) {
    res.send(response);
  });
});

module.exports = router;
