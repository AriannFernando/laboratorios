const numeros = [
    {nombre: "7715682112"},
];


const express = require('express');

const router = express.Router();

const path = require('path');


router.get('/', (request, response, next) => {
        console.log(request.body);
        response.render('lab1intro', {numeros: numeros});
});

router.get('/lab1', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 1.html'));
});

router.post('/lab1', (request, response, next) => {
    console.log(request.body);
    numeros.push({nombre: request.body.Phone});
    response.redirect('/labs156/');
});

router.get('/lab5', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 5.html'));
});
router.get('/lab6', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 6.html'));
});
router.get('/respuesta', (request, response, next) => {
    response.render('res');
});




module.exports = router;
