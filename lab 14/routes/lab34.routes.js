
const express = require('express');

const router = express.Router();

const path = require('path');

const lab34Controller = require('../controllers/lab34_controller');



router.get('/', lab34Controller.intro); 

router.get('/lab3', lab34Controller.lab3_get); 

router.post('/lab3', lab34Controller.lab3_post); 


router.get('/lab4', lab34Controller.lab4); 


module.exports = router;