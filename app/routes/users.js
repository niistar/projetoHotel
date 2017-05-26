var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.js');

/* GET users listing. */

/*router.get('/aaa', function(req, res, next) {
  
  User.find({}, function(err, user){
    if(err){
     // return res.send();
    }
    res.render('adicionarQuarto.ejs');
    console.log("sadasd");
  });

 // res.send('respond with a resource');

  
});*/

router.get('/aaa', function(req, res, next) {
  
  User.find({}, function(err, user){
    if(err){
     return res.send();
    }
    else
    res.json(user);
    //res.render('adicionarQuarto.ejs',{data:user});
    console.log(user);
  });

router.post('/aaa', function(req, res, next) {
  console.log(req);
  User.find({}, function(err, user){
    if(err){
     return res.send();
    }
    else
    res.json(user);
    //res.render('adicionarQuarto.ejs',{data:user});
    console.log(user);
  });
});

  
});


module.exports = router;
