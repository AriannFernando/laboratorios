
let num = "";
const fs = require('fs');

const http = require('http');
const laboratorio1=fs.readFileSync('C:/Users/Ariann/Documents/labs construcción/lab1/lab1.html', 'utf-8');
const laboratorio5=fs.readFileSync('C:/Users/Ariann/Documents/labs construcción/lab 5/index.html', 'utf-8');
const laboratorio6=fs.readFileSync('C:/Users/Ariann/Documents/labs construcción/lab 6/index.html', 'utf-8');

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

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Laboratorio 10</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido al laboratorio 10</h1>');
        response.write('<main>');
        response.write('<h2>Visita los laboratorios previos</h2>');
        response.write('<p> Tres laboratorios:</p>');
        response.write('<ol>');
        response.write('<a href="lab1">Laboratorio 1</a>');
        response.write('</ol>');
        response.write('<ol>');
        response.write('<a href="lab5">Laboratorio 5</a>');
        response.write('</ol>');
        response.write('<ol>');
        response.write('<a href="lab6">Laboratorio 6</a>');
        response.write('</ol>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/lab1' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(laboratorio1);
    } else if (request.url === '/lab1' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            num=num+nuevo_dato+",";
            write(num); 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            return response.end(laboratorio1);
        });
    }
    else if (request.url === '/lab5' ) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(laboratorio5);
    }
    else if (request.url === '/lab6' ) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(laboratorio6);
    } 
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>laboratorios 10 | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página '+ request.url +' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }

});

server.listen(3000, function (error) {
    if (error) {
        console.log('Algo Salio Mal',error);
    } else {
        console.log('El servidor esta escuchando el puerto 3000');

    }
});
