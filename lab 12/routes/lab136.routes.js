let num = "";
const fs = require('fs');

function write(dat){
    fs.writeFile('numeros.txt', dat, (err) => {
        if (err) throw err;
    })
    read();
    
}
function read(){
    fs.readFile('numeros.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
}

const express = require('express');

const router = express.Router();

const path = require('path');


router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 12</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido al laboratorio 12</h1><main><h2>Visita los laboratorios previos</h2><p> Tres laboratorios:</p><ol><a href="/labs136/lab1">Laboratorio 1</a></ol><ol><a href="/labs136/lab3">Laboratorio 3</a></ol><ol><a href="/labs136/lab6">Laboratorio 6</a></ol></main></body>';
    response.send(respuesta);
});

router.get('/lab1', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 1.html'));
});

router.post('/lab1', (request, response, next) => {
    console.log(request.body);
    num=num+request.body.Phone+",";
    console.log(num)
    write(num); 
    response.status = 303;
    response.redirect('/labs136/');
});

router.get('/lab3', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 3.html'));
});
router.post('/lab3', (request, response, next) => {
    console.log(request.body);
    num=num+request.body.Phone+",";
    console.log(num)
    write(num); 
    response.status = 303;
    response.redirect('/labs136/');
});

router.get('/lab6', (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 6.html'));
});



module.exports = router;
