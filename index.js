var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());

var port = 3000;

var conn = massive.connectSync({ 
  connectionString : "postgres://postgres:@localhost/massive_demo"
});
app.set('db', conn);
var controller = require('./productsCtrl.js');
var db = app.get('db');


app.get('/products', controller.getAll);
app.get('/products/:id', controller.getOne);
app.put('/products/description/:id', controller.update);
app.delete('/products/products/:id', controller.delete);
app.post('/products', controller.create);

app.listen(port, function() {
  console.log("Started server on port", port);
});
