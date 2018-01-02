const express = require('express');
const Store = require('./models').Store;

const router = express.Router();

// GET /stores
router.get('/', function(req, res, next) {
	Store.find({})
		.exec((err, stores) => {
			if(err) return next(err);
			res.json(stores);
		});
});


// POST /stores
router.post('/', (req, res, next) => {

  const store = new Store(req.body);

  store.save((err, store) => {
      if(err) return next(err);
		  res.status(201);
		  res.json(store);
  });

});

module.exports = router;
