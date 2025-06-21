const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/logincontroller');

router.post('/', logincontroller.login);

module.exports = router;
