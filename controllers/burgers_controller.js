var express = require('express');
var router = require('router');
var burger = require('../models/burger.js');

var app = express();

module.exports.controller = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

}

