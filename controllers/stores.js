const Store = require('../models/store');

module.exports = {
  getAllStore: (req, res, next) => {
    Store.find({})
      .then(stores => {
        res.status(200).json(stores)
      })
      .catch(err => {
        next(err);
      });
  },
  createNewStore: (req, res, next) => {
    const newStore = new Store(req.body);
    newStore.save()
      .then(store => {
        res.status(201).json(store)
      })
      .catch(err => {
        next(err);
      });
  }
}
