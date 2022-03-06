const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 12</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido al laboratorio 12</h1><main><h2>Visita los laboratorios previos</h2><p> Dos laboratorios:</p><ol><a href="/labs54/lab4">Laboratorio 4</a></ol><ol><a href="/labs54/lab5">Laboratorio 5</a></ol>></main></body>';
    response.send(respuesta);
});

router.get('/lab4', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 4.html'));
});
router.get('/lab5', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 5.html'));
});
module.exports = router;