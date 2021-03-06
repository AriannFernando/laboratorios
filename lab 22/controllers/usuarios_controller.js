const bcrypt = require('bcryptjs');
const Usuario = require('../models/user');


exports.get_login =  (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario 
    });
};

exports.login =  (request, response, next) => {
    Usuario.findOne(request.body.nombre)
    .then(([rows, fieldData]) => {
        console.log(rows);
        if (rows.length < 1) {
            return response.redirect('/users/login');
        }
        const user = new Usuario(rows[0].username, rows[0].password, rows[0].nombre);
        bcrypt.compare(request.body.passwd, user.password)
            .then(doMatch => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.user = user;
                    request.session.usuario = user.nombre;
                    return request.session.save(err => {
                        response.redirect('/labs156/');
                    });
                }
                response.redirect('/users/login');
            }).catch(err => {
                response.redirect('/users/login');
            });
    }).catch((err) => {
        console.log(err);
    });
};

exports.get_signup =  (request, response, next) => {
    response.render('signups', {
     usuario: request.session.usuario ? request.session.usuario : '',
    });
};

exports.signup =  (request, response, next) => {
    const nuevo_user = new Usuario(request.body.username, request.body.password, request.body.nombre);
    nuevo_user.save()
        .then(() => {
            response.redirect('/users/login');
        }).catch((err) => {
            console.log(err);
        });
};

exports.logout =  (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};


exports.get_view = (request, response, next) => {
    console.log(request.body);
    User.findOne(request.params.id).then(([rows, fieldData])=>{
        response.status(200).json({user: rows[0]});
    }).catch((error)=>{
        console.log(error);
    });
};