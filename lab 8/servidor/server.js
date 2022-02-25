const http = require('http');
const fs = require('fs');
const port=3000;

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('C:/Users/Ariann/Documents/labs construcción/lab 8/servidor/front/index.html',function(error,data){
        if (error) {
            res.writeHead(404);
            res.writeHead('Error: File Not Found')
        }  else{
            res.write(data);
        }  
        res.end()
    })
});

server.listen(port, function (error) {
    if (error) {
        console.log('Algo Salio Mal',error);
    } else {
        console.log('El servidor esta escuchando el puerto '+port);

    }
});