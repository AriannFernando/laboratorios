const express = require('express');

const router = express.Router();

const path = require('path');
const numeros = [
    {nombre: "7715682112"},
];

router.get('/', (request, response, next) => {
    console.log(request.body);
    response.render('lab3intro', {numeros: numeros });
});

router.get('/lab3', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 3.html'));
});

router.post('/lab3', (request, response, next) => {
    console.log(request.body);
    numeros.push({nombre: request.body.Phone});
    response.redirect('/labs34/');
});

router.get('/lab4', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 4.html'));
});
module.exports = router;