const Store = require('../models/store');

module.exports = {
  getAllStore: (req, res, next) => {
    Store.find({}, (err, stores) => {
      if(err) {
        next(err)
      }
      res.status(200).json(stores);
    })
  },
  createNewStore: (req, res, next) => {
    const newStore = new Store(req.body);
    newStore.save((err, store) => {
      if(err) {
        next(err)
      }
      res.status(201).json(store);
    })
  }
}
