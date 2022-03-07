const numeros = [
    {nombre: "7715682112"},
];


module.exports = class Numero {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_numero) {
        this.nombre = nuevo_numero;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        numeros.push(this);
        console.log(numeros);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return numeros;
    }

}