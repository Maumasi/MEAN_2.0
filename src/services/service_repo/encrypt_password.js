const { SHA256 } = require('crypto-js');

const jwt = require('jsonwebtoken');


const data = {
  id: 4,
};

const token = jwt.sign(data, 'something');

const decoded = jwt.verify(token, 'something');
