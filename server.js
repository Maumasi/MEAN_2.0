// use the `.env` file
const dotenv = require('dotenv');
dotenv.load();

const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
