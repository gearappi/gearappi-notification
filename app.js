
const express = require('express');
const app = express();
const createError = require('http-errors');
const indexRouter = require('./src/routes/index');
var cors = require('cors')
require('dotenv').config()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 7878;
app.use(cors());
app.use(express.json());
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send('UUUps');
  next(createError(404));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

