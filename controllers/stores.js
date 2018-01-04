const Store = require('../models/store');

module.exports = {
  index: async (req, res, next) => {
    try {
      const stores = await Store.find({});
      res.status(200).json(stores);
    } catch(err) {
      next(err);
    }
  },
  newStore: async (req, res, next) => {
    try {
      const newStore = new Store(req.body);
      const store = await newStore.save();
      res.status(201).json(store);
    } catch(err) {
      next(err);
    }
  },
  getStore: async (req, res, next) => {
    try {
      const { storeId } = req.params;
      const store = await Store.findById(storeId);
      res.status(200).json(store);
    } catch(err) {
      next(err);
    }
  }
}
