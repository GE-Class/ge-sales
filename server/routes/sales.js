var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res){
  res.send('ok');
});

module.exports = router;
