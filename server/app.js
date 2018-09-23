const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const api = require('./api');

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '../client/index.html'))
);

app.use('/api', require('./api'));

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  res
    .status(err.status || 500)
    .send('<h1>There was an Error. Please Reload.</h1>');
});

module.exports = app;
