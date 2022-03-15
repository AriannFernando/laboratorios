

const express = require('express');

const router = express.Router();

const path = require('path');

const lab156Controller = require('../controllers/lab156_controller');

const isAuth = require('../controllers/is-auth.js');

router.get('/',isAuth, lab156Controller.intro); 

router.post('/', lab156Controller.intro_post); 

router.get('/lab1',isAuth, lab156Controller.lab1_get); 

router.post('/lab1', lab156Controller.lab1_post); 

router.get('/lab5',isAuth, lab156Controller.lab5); 

router.get('/lab6',isAuth, lab156Controller.lab6); 

router.get('/respuesta',isAuth, lab156Controller.respuesta); 



module.exports = router;
