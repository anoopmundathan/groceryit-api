const Store = require('../models/store');

module.exports = {
  getAllStore: async (req, res, next) => {
    try {
      const stores = await Store.find({});
      res.status(200).json(stores);
    } catch(err) {
      next(err);
    }
  },
  createNewStore: async (req, res, next) => {
    const newStore = new Store(req.body);
    try {
      const store = await newStore.save();
      res.status(201).json(store);
    } catch(err) {
      next(err);
    }
  }
}
