const express = require('express');
const Store = require('../models/store');
const storeController = require('../controllers/stores');

const router = express.Router();

// GET  /api/v1/stores - Get stores
// POST /api/v1/stores - New store
router.route('/')
	.get(storeController.getStores)
	.post(storeController.newStore);

// GET    /api/v1/stores/:id - Get store
// PATCH  /api/v1/stores/:id - Edit store
// PUT    /api/v1/stores/:id - Replace store 
// DELETE /api/v1/stores/:id - Delete store
router.route('/:storeId')
	.get(storeController.getStore)
	.patch(storeController.updateStore)
	.put(storeController.replaceStore)
	.delete(storeController.removeStore);

// GET    /api/v1/stores/:id/items - Get all product items belongs to a store
// POST   /api/v1/stores/:id/items - Create new product item for a store
router.route('/:storeId/items')
	.get(storeController.getStoreItems)
	.post(storeController.newStoreItem);

// GET    /api/v1/stores/:id/items/:id - Get a single item belongs to a store
// PUT    /api/v1/stores/:id/items/:id - Update product item belongs to a store
// DELETE /api/v1/stores/:id/items/:id - Delete product item belongs to a store

module.exports = router;
