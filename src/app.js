
// first connect to the database
require('./models/db');
const bodyParser = require('body-parser');
const express = require('express');
// const routes = require('./routes');
const routes = require('./routes').routes; //
const passRouterToRoutes = require('./routes').router; //

const app = express();
passRouterToRoutes(express); //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes(express));
// app.use(express.static('./public'));

module.exports = app;
