var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var app = express();
var sassMiddleware = require('node-sass-middleware');

app.use(logger('dev'));
app.use('/api', api);

app.use(
  sassMiddleware({
    src: __dirname + '/public',
    dest: __dirname + '/public',
    debug: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;