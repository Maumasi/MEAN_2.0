
module.exports = (express) => {
  const router = express.Router();
  router.use('/todo', require('./endpoints/test')(express));

  return router;
};
