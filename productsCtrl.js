var app = require('./index');
var db = app.get('db');

module.exports = {

    create: function(req, res) {
    var params = [
        req.body.name,
        req.body.description, 
        req.body.price,
        req.body.imageurl
    ]
    db.create_product(params, function(err, response){
        if(!err){
            res.send('Yay');
        }
    })
    },

    delete: function(req, res){
    db.delete_product(req.params.id, function(err, products){
        if(!err) {
            res.send('DeletieSmeeetie');
        }
    })
    },

    update: function(req, res){
    db.update_products([req.params.id, req.body.description], function(err, products){
        if(!err){
            res.send('Whoop');
        }
    })
    },

    getOne: function(req, res){
    db.read_product(req.params.id, function(err, products){
        if(!err){
            res.send(products);
        }
    })
    },

    getAll: function(req, res){
    db.read_products(function(err, products){
        if(!err){
            res.send(products);
        }
    })
    }
}





