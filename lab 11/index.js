const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


const rutas_156 = require('./routes/lab156.routes.js');
const rutas_34 = require('./routes/lab34.routes.js');

app.use('/labs34/', rutas_34);

app.use('/labs156/', rutas_156);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/inicio', (request, response, next) => {
    response.send('Bienvenido al laboratorio 11'); 
});

app.use('/json', (request, response, next) => {
    response.send('La utilidad del package json es poder:'); 
});
app.use((request, response, next) => {
    response.statusCode = 404;
    let respuesta='<!DOCTYPE html><html lang="es-mx"><head><title>laboratorios 10 | Page not found</title><meta charset="utf-8"></meta></head><body><h1>La página '+ request.url +' no se encontró</h1></body>';
    response.send(respuesta);
});

app.listen(3000);