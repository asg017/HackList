var express = require('express');
var routerNormal = express.Router();
var apiPosts = require('../data/apis.json');
var userCarts = require('../data/carts.json');

/*Front Page Route*/
routerNormal.route('/')
.all(function(req, res, next) {
  console.log('Inside /');
  next();
})
.get(function(req, res, next) {
  res.render("front", {username:"blarghah", posts: apiPosts, userCarts: userCarts});
});


/*User Pages Route*/
routerNormal.route(['/user/:id', '/u/:id'])
.all(function(req, res, next) {
  console.log("Inside /user/:id");
  next();
})
.get(function(req, res, next) {
  console.log('mooo, inside user/:id');
  res.send("USER INFO HERE FOR "+req.params.id);
});

/*API Pages Route*/
routerNormal.route('/a/:id/*')
.all(function(req, res, next) {
  console.log("Inside /a/:id");
  next();
})
.get(function(req, res, next) {
  console.log('mooo, inside a/:id');
  res.send("API INFO HERE FOR "+req.params.id);
});


module.exports = routerNormal;
