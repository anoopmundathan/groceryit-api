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

// CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	if(req.method ==="OPTONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
		return res.status(200).json({});
	}
	next();
});

app.use('/api/v1/stores', routes);

// Send 404 if route is not found
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Error Handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
});
