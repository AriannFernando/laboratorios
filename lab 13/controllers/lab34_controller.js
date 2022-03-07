const path = require('path');
const Numero = require('../models/numeros');

exports.intro = (request, response, next) => {
    response.render('lab3intro', {numeros: Numero.fetchAll()});
};

exports.lab4 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 4.html'));
};

exports.lab3_get = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 3.html'));
};

exports.lab3_post = (request, response, next) => {
    const numero = new Numero(request.body.Phone);
    numero.save();
    response.redirect('/labs34/');
};