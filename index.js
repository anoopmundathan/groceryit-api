const express = require('express');
const logger = require('morgan');
const routes = require('./routes');
const app = express();

app.use(logger('dev'));
app.use('/api/v1/stores', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
});
