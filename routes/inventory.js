const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const itemController = require('../controllers/itemController');
//item routes
router.get('/items', itemController.item_list);

module.exports = router;