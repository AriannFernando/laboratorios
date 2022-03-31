const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usuarios_controller');

router.get('/login', usersController.get_login);

router.post('/login', usersController.login);

router.get('/logout', usersController.logout);

router.get('/signup', usersController.get_signup);

router.post('/signup', usersController.signup);

router.get('/view/:id', usersController.get_view);

module.exports = router;