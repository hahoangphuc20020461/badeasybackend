const router = require('express').Router();
const UserController = require('../controller/usercontroller');

router.post('/registration', UserController.register);

module.exports = router;