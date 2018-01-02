const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

// Logger
app.use(logger('dev'));

// Parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json 
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/grocery');
const db = mongoose.connection;

db.on('error', err => {
    console.log('Mongoose error', err);
});

db.on('open', () => {
    console.log('Mongoose connection opened');
});

app.use('/api/v1/stores', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
});
