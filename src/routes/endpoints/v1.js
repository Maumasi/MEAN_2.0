
const TodoController = require('../../controllers/task')('task');
const UserController = require('../../controllers/task')('user');

module.exports = (express) => {
  const router = express.Router();

  // parent route: /todo/v1
  // ==========================================
  router.post('/task/add', TodoController.create);
  router.put('/task/edit/:id', TodoController.update);
  router.delete('/task/remove/:id', TodoController.delete);
  router.get('/task/:id', TodoController.find.byId);
  router.get('/tasks', TodoController.find.all);

  router.post('/user/add', UserController.create);
  router.put('/user/edit/:id', UserController.update);
  router.delete('/user/remove/:id', UserController.delete);
  router.get('/user/:id', UserController.find.byId);
  return router;
};
