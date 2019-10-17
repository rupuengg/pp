const express = require('express');
const bearerToken = require('express-bearer-token');
const router = express.Router({ caseSensitive: true });
const authRouter = require('./auth.router');
const apiURL = `/api/${process.env.API_VERSION}`;

// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bearerToken());

// Routes
router.use(`${apiURL}/auth`, authRouter);

// If URL does't match
router.use('*', (req, res) => {
  return res
    .status(require('../constants/http.constant').NOT_FOUND)
    .json({
      error: require('../constants/error.message.constant').NOT_FOUND,
      url: req.originalUrl
    });
});

module.exports = router;