const Store = require('../models/store');
const Item = require('../models/item');

module.exports = {
  getStores: async (req, res, next) => {
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
  },
  updateStore: async (req, res, next) => {
    // req.body may contain any number of fields
    try {
      const { storeId } = req.params;
      const newValue = req.body;
      const store = await Store.findByIdAndUpdate(storeId, newValue);
      res.status(200).json(store);
    } catch(err) {
      next(err);
    }
  },
  replaceStore: async (req, res, next) => {
    // enforce that req.body must contain all the fields
    try {
      const { storeId } = req.params;
      const newValue = req.body;
      const store = await Store.findByIdAndUpdate(storeId, newValue);
      res.status(200).json(store);
    } catch(err) {
      next(err);
    }
  },
  removeStore: async (req, res, next) => {
    try {
      const { storeId } = req.params;
      const store = await Store.findByIdAndRemove(storeId);
      res.json(200).json(store);
    } catch(err) {
      next(err);
    }
  },
  newStoreItem: async (req, res, next) => {
    try {
      const { storeId } = req.params;
      const newItem = new Item(req.body);
      // Get store
      const store = await Store.findById(storeId);
      // Set the relation
      newItem.storeId = store;
      const item = await newItem.save();
      res.status(201).json(item);
    } catch(err) {
      next(err);
    }
  }
}
