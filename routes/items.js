const express = require('express');
const itemController = require('../controllers/items');

const router = express.Router();

// GET    /api/v1/items/:id - Get product item
// PUT    /api/v1/items/:id - Update product item 
// DELETE /api/v1/items/:id - Delete product item
router.route('/:itemId')
	.get(itemController.getItem)
  .put(itemController.updateItem)
  .delete(itemController.removeItem);

module.exports = router;
