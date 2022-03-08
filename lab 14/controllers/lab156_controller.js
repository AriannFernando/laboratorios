const path = require('path');
const Numero = require('../models/numeros');

exports.intro = (request, response, next) => {
    console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    response.render('lab1intro', {numeros: Numero.fetchAll(),
        ultimo_numero: request.cookies.ultimo_numero,
        usuario: request.session.usuario });
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
    response.setHeader('Set-Cookie', 'ultimo_numero='+numero.nombre );
    response.redirect('/labs156/');
};