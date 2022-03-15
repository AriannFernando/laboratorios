
const express = require('express');

const router = express.Router();

const path = require('path');

const lab34Controller = require('../controllers/lab34_controller');

const isAuth = require('../controllers/is-auth.js');

router.get('/',isAuth, lab34Controller.intro); 

router.post('/', lab34Controller.intro_post); 

router.get('/lab3',isAuth, lab34Controller.lab3_get); 

router.post('/lab3', lab34Controller.lab3_post);
 
router.get('/lab4',isAuth, lab34Controller.lab4); 





module.exports = router;