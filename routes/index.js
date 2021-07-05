const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller');

/* GET home page. */
router.get('/', indexController.render_index);
  
module.exports = router;