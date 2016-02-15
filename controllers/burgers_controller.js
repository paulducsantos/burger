var express = require('express');
var router = require('router');
var burger = require('../models/burger.js');

var app = express();

module.exports.burgerController = function(app) {

  app.get('/', function(req, res) {
    burger.findAllBurgers(function(burgers) {
      var data = {
        allBurgers: burgers
      }
      res.render('index', {burgers});
    });
    
  });

  app.post('/newBurger', function(req, res) {
    burger.addBurger(req.body.burgerName, function(result) {
      res.redirect('/');
    });
  });

  app.post('/devour/:burgerName', function(req, res) {
    burger.devour(req.params.burgerName, function(result) {
      res.redirect('/');
    });
  });
}