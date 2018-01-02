const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');

const app = express();

// Logger
app.use(logger('dev'));

// Parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json 
app.use(bodyParser.json());

app.use('/api/v1/stores', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
});
