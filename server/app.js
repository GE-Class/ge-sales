var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var morgan = require('morgan');

var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

var models = require('./models');
models.sequelize.sync().then(function(){
  app.listen(3000, function() {
    console.log('***********************************');
    console.log('listening:', 3000);
    console.log('***********************************');
  });
});

app.use('/users', require('./routes/users.js'));
app.use('/products', require('./routes/products.js'));
app.use('/sales', require('./routes/sales.js'));
