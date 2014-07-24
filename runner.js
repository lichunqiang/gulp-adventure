#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure({
  name: 'gulp-adventure',
  title: 'just learn you gulp',
  datadir: __dirname + '/.config'
});

var problems = require(__dirname + '/data/order.json');

problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));