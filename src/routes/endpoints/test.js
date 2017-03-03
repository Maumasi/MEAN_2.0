module.exports = (express) => {
  const router = express.Router();


// ==========================================   tesing route
// Route: /v1/shorten
  router.get('/test', (req, res) => {
    res.send('hit test page');
  });// router.post

  return router;
};
