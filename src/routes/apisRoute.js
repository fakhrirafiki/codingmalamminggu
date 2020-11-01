const express = require('express');
const apisController = require('../controller/apisController')
const router = express.Router();

// GET  : localhost/3000/apis/post

router.get('/posts', apisController.get)
router.post('/posts', apisController.create)
router.patch('/posts/:id', apisController.update)
router.delete('/posts/:id', apisController.delete)


module.exports = router;





