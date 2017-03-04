// first connect to the database
require('./src/models/db');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./src/routes');
const app = express();


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes(express));

// app.use(express.static('./public'));

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
