'use strict';

const mongoose = require('mongoose');

// Reference Schema
const Schema = mongoose.Schema;

// Create Schema
const itemSchema = new Schema({
  storeId: { type: Schema.Types.ObjectId, ref: 'store' },
  name: String,
  price: Number,
	createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create Model
const Item = mongoose.model('item', itemSchema);

module.exports = Item;

