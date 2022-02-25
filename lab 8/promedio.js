const arreglo=[1,2,-2,4,-10,12,-2,34,50,-23,0,0];
function promedios(arreglo) {
    let sumador=0;
    let promedio=0;
    let mensj2="";
    for (let i = 0; i < arreglo.length; i++){
        sumador=sumador+arreglo[i];
    }
    promedio=sumador/(arreglo.length);
    mensj2=`Del arreglo: ${arreglo}, el promedio es ${promedio}.`;
    return mensj2;
}
console.log(promedios(arreglo));