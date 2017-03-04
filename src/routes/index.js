
module.exports = (express) => {
  const router = express.Router();
  router.use('/todo/v1', require('./endpoints/v1')(express));
  return router;
};
