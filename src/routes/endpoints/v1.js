const TodoController = require('../../controllers/todo');

module.exports = (express) => {
  const router = express.Router();

  // route: /todo/v1
  // ==========================================
  router.post('/add', TodoController.create);
  router.put('/edit/:id', TodoController.update);
  router.delete('/remove/:id', TodoController.delete);

  return router;
};
