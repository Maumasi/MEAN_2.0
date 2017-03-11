// middleware
const { authenticateUser } = require('../../middleware/index.js');

const TodoController = require('../../controllers/v1')('task');
const UserController = require('../../controllers/v1')('user');

module.exports = (express) => {
  const router = express.Router();

  // parent route: /todo/v1
  // ==========================================
  router.post('/task/add', authenticateUser, TodoController.create);
  router.put('/task/edit/:id', TodoController.update);
  router.delete('/task/remove/:id', TodoController.delete);
  router.get('/task/:id', authenticateUser, TodoController.find.byId);
  router.get('/tasks', authenticateUser, TodoController.find.all);

  router.post('/user/add', UserController.create);
  router.put('/user/edit/:id', UserController.update);
  router.delete('/user/remove/:id', UserController.delete);
  router.get('/user/:id', UserController.find.byId);

  // user specific routes
  router.post('/user/login', UserController.login);
  router.delete('/user/logout', authenticateUser, UserController.logout);
  return router;
};
