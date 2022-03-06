const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const rutas_136 = require('./routes/lab136.routes.js');
const rutas_54 = require('./routes/lab54.routes.js');

app.use('/labs54/', rutas_54);

app.use('/labs136/', rutas_136);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/inicio', (request, response, next) => {
    response.send('Bienvenido al laboratorio 11'); 
});


app.use((request, response, next) => {
    response.statusCode = 404;
    let respuesta='<!DOCTYPE html><html lang="es-mx"><head><title>laboratorios 10 | Page not found</title><meta charset="utf-8"></meta></head><body><h1>La página '+ request.url +' no se encontró</h1></body>';
    response.send(respuesta);
});

app.listen(3000);