const express = require('express');
const Store = require('../models/store');

const router = express.Router();

// POST /api/v1/stores - Create store
router.post('/', (req, res, next) => {
  const store = new Store(req.body);
  store.save((err, store) => {
      if(err) return next(err);
		  res.status(201);
		  res.json(store);
  });
});


// GET /api/v1/stores - Get all stores
router.get('/', (req, res, next) => {
	Store.find({})
		.exec((err, stores) => {
			if(err) return next(err);
			res.json(stores);
		});
});

// GET /api/v1/stores/:id - Get a single store

// PUT /api/v1/stores/:id - Edit a single store

// DELETE /api/v1/stores/:id - Delete a single store

// POST /api/v1/stores/:id/items - Create new product item for a store

// GET /api/v1/stores/:id/items - Get all product items belongs to a store

// GET /api/v1/stores/:id/items/:id - Get a single item belongs to a store

// PUT /api/v1/stores/:id/items/:id - Update product item belongs to a store

// DELETE /api/v1/stores/:id/items/:id - Delete product item belongs to a store

module.exports = router;
