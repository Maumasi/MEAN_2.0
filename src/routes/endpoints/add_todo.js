
module.exports = (express) => {
  const router = express.Router();

  // ==========================================   submit to database
  // route: /todo/v1
  router.post('/add', (req, res) => {
    console.log(req.body);
    // console.log(res.send('Hit route: /todo/v1/add'));
  });
  return router;
};
