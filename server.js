// use the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const app = require('./src/app');

let port = process.env.PORT || 3000;

// change port for testing so default dev port 3000 is still open
if (process.env.NODE_ENV === 'test') {
  port = process.env.TEST_PORT;
}

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
