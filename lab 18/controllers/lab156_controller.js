const path = require('path');
const Numero = require('../models/numeros');

exports.intro = (request, response, next) => {
    console.log(request.cookies);
    request.session.info = '';
    Numero.fetchAll().then(([rows, fieldData]) => {
        console.log(rows);
        response.render('lab1intro', {
            numeros: rows,
            ultimo_numero: request.cookies.ultimo_numero,
            usuario: request.session.usuario });
    })
    .catch(err => {
        console.log(err);
    });

};
exports.intro_post = (request, response, next) => {
    Numero.fetchOne(request.body.idnum)
    .then(([rows, fieldData]) => {
        console.log(rows);
        response.render('lab1intro', {
            numeros: rows,
            username: request.session.username ? request.session.username : '',
            ultimo_numero: request.cookies.ultimo_numero,
            //El primer info es la variable del template, el segundo la constante creada arriba
        }); 
    })
    .catch(err => {
        console.log(err);
    });
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

exports.newNum_get = (request, response, next) => {
    response.render('NunNew');
};

exports.newNum_post = (request, response, next) => {
    const numero = new Numero(request.body.nombre, request.body.Phone, request.body.imagen);
    numero.save().then(() => {
        request.session.info = numero.numero + ' fue registrado con éxito';
        response.setHeader('Set-Cookie', 'ultimo_numero='+numero.numero);
        response.redirect('/labs156/');
    })
    .catch(err => console.log(err));
};

exports.lab1_get = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab 1.html'));
};

exports.lab1_post = (request, response, next) => {
    const numero = new Numero(request.body.nombre, request.body.Phone, request.body.imagen);
    numero.save().then(() => {
        request.session.info = numero.numero + ' fue registrado con éxito';
        response.setHeader('Set-Cookie', 'ultimo_numero='+numero.numero);
        response.redirect('/labs156/');
    })
    .catch(err => console.log(err));
};