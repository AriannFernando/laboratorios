

const express = require('express');

const router = express.Router();

const path = require('path');

const lab156Controller = require('../controllers/lab156_controller');



router.get('/', lab156Controller.intro); 

router.get('/lab1', lab156Controller.lab1_get); 

router.post('/lab1', lab156Controller.lab1_post); 

router.get('/lab5', lab156Controller.lab5); 

router.get('/lab6', lab156Controller.lab6); 

router.get('/respuesta', lab156Controller.respuesta); 


module.exports = router;
