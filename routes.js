const express = require('express');
const router = express.Router();

// POST /stores
router.post('/', (req, res, next) => {
  res.send('Posted');
  next();
});

module.exports = router;
