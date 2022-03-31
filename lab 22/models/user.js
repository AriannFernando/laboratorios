const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(nuevo_usuario, nuevo_passwd, nuevo_nombre) {
        this.usuario = nuevo_usuario;
        this.password = nuevo_passwd;
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then( (password_cifrado) => {
                return db.execute(
                    'INSERT INTO userss (username, password, nombre) VALUES (?,?,?)', 
                    [this.usuario, password_cifrado, this.nombre]);
            }).catch((err) => {
                console.log(err);
            }); 
    }

    static findOne(usuario) {
        return db.execute(
            'SELECT * FROM userss WHERE username=?', [usuario]);
    }


}