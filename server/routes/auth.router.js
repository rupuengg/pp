// authRoute

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authentication, catchValidationErrors } = require('../middlewares/auth.middleware');

router.post('/', authController.authenticate);
router.delete('/', authentication, catchValidationErrors, authController.logout);

module.exports = router;