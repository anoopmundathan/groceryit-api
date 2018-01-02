const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
	text: String
});

const Store = mongoose.model('Store', StoreSchema);

module.exports.Store = Store;

