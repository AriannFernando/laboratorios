const path = require('path');
const Numero = require('../models/numeros');

exports.intro = (request, response, next) => {
    response.render('lab1intro', {numeros: Numero.fetchAll()});
};

exports.lab5 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 5.html'));
};
exports.lab6 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 6.html'))
};
exports.respuesta = (request, response, next) => {
    response.render('res');
};

exports.lab1_get = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 1.html'));
};

exports.lab1_post = (request, response, next) => {
    const numero = new Numero(request.body.Phone);
    numero.save();
    response.redirect('/labs156/');
};