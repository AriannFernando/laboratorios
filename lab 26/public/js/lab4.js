//Ejercicio1
const nump1 = prompt("ingresa un número para obtener la tabla de cuadrados y cubos del número");
let tabla= '<table><tr><th>Numero</th><th>Numero al cuadrado</th><th>Numero al cubo</th><tr>';
for (let i = 1; i <= nump1; i++){
    tabla = tabla+`<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
}
tabla=tabla + '</table>';
document.getElementById('respuesta1').innerHTML = tabla;
//Ejercicio2
const numEj1 = Math.floor(Math.random() * (50-1)) + 1;
const numEj2 = Math.floor(Math.random() * (50-1)) + 1;
let   sumej =numEj1+numEj2;
const inicio= Date.now();
const nump2 = prompt(`ingresa el resultado de la suma de los números ${numEj1} y ${numEj2}`);
const fin= Date.now();
tiempoMili=fin-inicio;
tiempoSeg=tiempoMili/1000;
let mensaje="";
if (sumej==nump2) {
    mensaje=`Correcto, te tardaste ${tiempoSeg} segundos en responder`;
}
else{
    mensaje=`Incorrecto, te tardaste ${tiempoSeg} segundos en responder`;
}
document.getElementById('respuesta2').innerHTML = mensaje;
//Ejercicio3
const arreglo=[1,2,-2,4,-10,12,-2,34,50,-23,0,0];

function contador (arreglo){
    let positivos=0;
    let neutro=0;
    let negativos=0;
    let mensj="";
    for (let i = 0; i <= arreglo.length; i++){
        if(arreglo[i]<0){
            negativos=negativos+1;
        }
        else if(arreglo[i]==0){
            neutro=neutro+1;
        }
        else if(arreglo[i] > 0){
            positivos=positivos+1;
        }
    }
    mensj=`Del arreglo: ${arreglo} , existen ${negativos} números menores a cero, ${neutro} números iguales a cero y ${positivos} números mayores a cero.`;
    return mensj;
}
document.getElementById('respuesta3').innerHTML = contador(arreglo);
//Ejercicio4

const matriz=[[1,2,2,4],[10,12,2,34],[50,23,34,12]];

function promedios(matriz) {
    const matrizpromedio=[];
    let sumador=0;
    let promedio=0;
    let mensj2="";
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j <  matriz[i].length; j++) {
            sumador=sumador+matriz[i][j];
        }
        promedio=sumador/(matriz[i].length);
        matrizpromedio.push(promedio);
        sumador=0;
    }
    mensj2=`De la matriz: [[1,2,2,4],[10,12,2,34],[50,23,34,12]], los promedios de cada renglon de la matriz son ${matrizpromedio}.`;
    return mensj2;
}
document.getElementById('respuesta4').innerHTML = promedios(matriz);
//Ejercicio5
const numin = prompt("ingresa un número para obtener el inverso de los dígitos del número");
const numref = numin;
function inverso(numin) {
    let mensj3="";
    let inverso = 0;
    while (numin != 0) {
        inverso = inverso * 10 + numin % 10
        numin = (Math.floor(numin / 10))
    }
    mensj3=`El número invertido de dígitos de ${numref} es igual a ${inverso}.`;
    return mensj3;
}
document.getElementById('respuesta5').innerHTML = inverso(numin);

//Ejercicio6

class poligono {
    constructor(radio, lado, numlados) {
      this.radio = radio;
      this.lado = lado;
      this.numlados= numlados;
    }
    // Getter
    get area() {
      return this.calcuArea();
    }

    get perimetro() {
        return this.calcuPerimetro();
    }
    get angExterno() {
        return this.calcuAngExterno();
    }
    // Method
    calcuArea() {
      return ((this.numlados*this.lado)*this.radio)/2;
    }
    calcuPerimetro() {
        return this.lado * this.numlados;
    }
    calcuAngExterno() {
        return 360 / this.numlados;
      }
  }

alert("A continuación se te pedira dar los datos de un poligono regular para obtener su área, perímetro, y ángulo externo");
const numeroLados = prompt("ingresa el número de lados del polígono");
const numTamLado = prompt("ingresa el tamaño del lado del polígono");
const numRadio = prompt("ingresa el radio del polígono");

const poligon = new poligono(numRadio,numTamLado,numeroLados);
let mensj4=`El polígono de ${poligon.numlados} lados, cuyo lado mide ${poligon.lado} unidades, y radio mide ${poligon.radio} unidades, tiene una área de ${poligon.area} unidades cuadradas, un perímetro de ${poligon.perimetro} unidades y su ángulo externo es de ${poligon.angExterno} grados.`;
document.getElementById('respuesta6').innerHTML = mensj4;
