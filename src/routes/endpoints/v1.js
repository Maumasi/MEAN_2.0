
const TodoController = require('../../controllers/todo')('task');

// module.exports = (express) => {
//   const router = express.Router();
//
//   // route - tasks: /todo/v1
//   // ==========================================
//   router.post('/add', TodoController.create);
//   router.put('/edit/:id', TodoController.update);
//   router.delete('/remove/:id', TodoController.delete);
//   router.get('/:id', TodoController.find.byId);
//   router.get('/', TodoController.find.all);
//   return router;
// };

const routerExtend = (express) => {
  return express.Router();
};

const routes = (model) => {
  const router = routerExtend();

  // route - tasks: /todo/v1
  // ==========================================
  router.post('/add', TodoController.create);
  router.put('/edit/:id', TodoController.update);
  router.delete('/remove/:id', TodoController.delete);
  router.get('/:id', TodoController.find.byId);
  router.get('/', TodoController.find.all);
  return router;
};

exports.routes = routes();
exports.router = routerExtend();
