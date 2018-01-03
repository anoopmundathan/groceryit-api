'use strict';

const mongoose = require('mongoose');

// Reference Schema
const Schema = mongoose.Schema;

// Create Schema
const StoreSchema = new Schema({
	firstName: String,
	lastName: String,
	storeName: String,
	mobile: Number,
	email: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

// Create Model
const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;

