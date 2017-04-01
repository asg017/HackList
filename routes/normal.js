var express = require('express');
var routerNormal = express.Router();

/*Front Page Route*/
routerNormal.route('/')
.all(function(req, res, next) {
  console.log('Inside /');
  next();
})
.get(function(req, res, next) {
  res.send("Frontpage yo");
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
routerNormal.route('/api/:id/*')
.all(function(req, res, next) {
  console.log("Inside /api/:id");
  next();
})
.get(function(req, res, next) {
  console.log('mooo, inside api/:id');
  res.send("API INFO HERE FOR "+req.params.id);
});


module.exports = routerNormal;
