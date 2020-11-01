const express = require('express');
const viewController = require('../controller/viewsController')
const router = express.Router();

router.get('/', viewController.getIndexView)
router.get('/create', viewController.getCreateView)
router.get('/edit/:id', viewController.getEditView)

module.exports = router;