const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller');
const taskController = require('../controllers/task_controller')
/* GET home page. */
router.get('/', indexController.render_index);


// lista los elementos 
router.get('/list',taskController.list);
// muestra el detalle de un elemento
router.get('/:id/details',taskController.details);
// crea un elemento
router.post('/create', taskController.create);
// actualiza un elemento
router.post('/:id/update',taskController.update);
// elimina un elemento
router.post('/:id/delete',taskController.delete);
  
module.exports = router;