'use strict';

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const pax8seo = require('./routes/pax8seo');
const port = process.env.PORT || 3000;

require('dotenv').config();

// prerender code
app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_KEY));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/pax8seo', pax8seo);

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
