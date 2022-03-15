const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const csrfProtection = csrf();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const rutas_usuarios=require('./routes/auth.routes.js');
const rutas_156 = require('./routes/lab156.routes.js');
const rutas_34 = require('./routes/lab34.routes.js');

app.use(session({
    secret: 'asdjienfeinnfiennfeisnfien93nfn3nf3nfn32fnew9fh4nrfbewefbhu2ionsnwalnwqweroinmxz', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/labs34/', rutas_34);

app.use('/labs156/', rutas_156);

app.use('/users', rutas_usuarios);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/inicio', (request, response, next) => {
    response.redirect('/users/login'); 
});


app.use((request, response, next) => {
    response.statusCode = 404;
    let respuesta='<!DOCTYPE html><html lang="es-mx"><head><title>laboratorios 10 | Page not found</title><meta charset="utf-8"></meta></head><body><h1>La página '+ request.url +' no se encontró</h1></body>';
    response.send(respuesta);
});

app.listen(3000);