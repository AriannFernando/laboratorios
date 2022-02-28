
const caballos = ["Spirit", "Tiro al Blanco", "Maxie"];

const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido a este sitio de caballos</h1>');
        response.write('<main>');
        response.write('<h2>Aquí se habla se de caballos</h2>');
        response.write('<p>Estos son nuestros caballos:</p>');
        response.write('<ol>');
        for (let i in caballos) {
            response.write('<li>' + caballos[i] + '</li>');
        }
        response.write('</ol>');
        response.write('<a href="nuevo">Agregar un nuevo caballo</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Bienvenido a este sitio de caballos</h1>');
        response.write('<main>');
        response.write('<h2>Aquí se habla se de nuevos caballos</h2>');
        response.write('<p>Ingresa los datos del nuevo caballo:</p>');
        response.write('<form action="/nuevo" method="POST">');
        response.write('<label for="nombre">Nombre del nuevo caballo: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de caballos</a>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/nuevo' && request.method === 'POST') {
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
            caballos.push(nuevo_dato);
            console.log(caballos);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>');
            response.write('<body>');
            response.write('<h1>Bienvenido a este sitio de caballos</h1>');
            response.write('<main>');
            response.write('<h2>Aquí se habla se de caballos</h2>');
            response.write('<h3>' + nuevo_dato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estos son nuestros caballos:</p>');
            response.write('<ol>');
            for (let i in caballos) {
                response.write('<li>' + caballos[i] + '</li>');
            }
            response.write('</ol>');
            response.write('<a href="nuevo">Agregar un nuevo caballo</a>');
            response.write('</main>');
            response.write('</body>');
            return response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página '+ request.url +' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }





















    /*
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });

    response.statusCode = 404;
    */
});

server.listen(3000);
