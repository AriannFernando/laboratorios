const db = require('../util/database');



module.exports = class Numero {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    
    constructor(nuevo_nombre, nueva_numero, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.numero = nueva_numero;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO usuarios (nombre, numero, imagen) VALUES (?, ?, ?)', 
            [this.nombre, this.numero, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.

    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(usuario_id) {
        return db.execute('SELECT * FROM usuarios WHERE id=?', [usuario_id]);
    }

}