
const express = require('express');
const app = express();
const createError = require('http-errors');
const axios = require('axios');
var indexRouter = require('./src/routes/index');
require('dotenv').config()

app.use(express.json());
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send('UUUps');
  next(createError(404));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

