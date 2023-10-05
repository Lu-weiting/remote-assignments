const express = require('express');
const router = express.Router();
const userController = require('../Controller/user_controller');

router.post('/',userController.signUp);

// router.get('/', userController.query);

module.exports = router;