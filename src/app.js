
// first connect to the database
require('./models/db');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes(express));
// app.use(express.static('./public'));

module.exports = app;
