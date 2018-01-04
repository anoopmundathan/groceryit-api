const Item = require('../models/item');

module.exports = {
  getItem: async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const item = await Item.findById(itemId);
      res.status(200).json(item);
    } catch(err) {
      next(err);
    }
  },
  updateItem: async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const newValue = req.body;
      const item = await Item.findByIdAndUpdate(itemId, newValue);
      res.status(200).json(item);
    } catch(err) {
      next(err);
    }
  },
  removeItem: async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const item = await Item.findByIdAndRemove(itemId);
      res.status(200).json(item);
    } catch(err) {
      next(err);
    }
  }
}
