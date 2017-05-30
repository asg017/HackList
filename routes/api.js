var express = require('express');
var data = require('../data/apis.json');
var routerApi = express.Router();

/*User Info API Route*/
routerApi.route('/user/:id')
.all(function(req, res, next) {
  console.log("Inside api/users/:id");
  next();
})
.get(function(req, res, next) {
  console.log("mooo, inside api/users get");
  res.json({'username':'exampleCow69', 'id':req.params.id});
});

/*API's info API Route*/
routerApi.route('/apis/:id')
.all(function(req, res, next) {
  console.log("Inside api/apis/:id");
  next();
})
.get(function(req, res, next) {
  console.log("mooo, inside api/apis get");
  res.json(data.filter(function(elem) {
    return elem.postId == req.params.id;
  })[0] );
});

routerApi.use(express.static(__dirname + '/views'));
routerApi.route('/templates/modal')
.get(function(req, res) {
  res.render('modals/test.ejs', {delimiter:'#'});
  /*res.sendFile('modals/test.ejs',
    {'root': __dirname + '/../views/', 'headers': {'Content-Type':'application/txt'}}
  );*/
});

module.exports = routerApi;
