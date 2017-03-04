
module.exports = (express) => {
  const router = express.Router();

  router.use('/todo/v1', require('./endpoints/add_todo')(express));

  return router;
};
