var fs = require('fs');

let datos = "hello";
  

function write(dat){
    fs.writeFile('test.txt', dat, (err) => {
        if (err) throw err;
    })
    read();
    
}
function read(){
    fs.readFile('test.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
}
write(datos);
