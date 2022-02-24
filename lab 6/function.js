let boton_input=document.getElementById("valido");
let boton_compra1=document.getElementById("compra1");
let boton_compra2=document.getElementById("compra2");
let boton_compra3=document.getElementById("compra3");
let boton_compra4=document.getElementById("compra4");
let boton_limpiar=document.getElementById("limpiar");

class carritos {
    constructor() {
        this.cantidadLibreta=0;
        this.precioLibreta=0;
        
        this.cantidadCarpeta=0;
        this.precioCarpeta=0;
        
        this.cantidadBoli=0;
        this.precioBoli=0;
        
        this.cantidadMochi=0;
        this.precioMochi=0;
  }
}

const productos = new carritos();


boton_input.onclick = () => {
let mensj="";
let contrasena1= document.getElementById("password1");
let contrasena2= document.getElementById("password2");
if ( contrasena1.value === contrasena2.value ){
    mensj="Las contraseña es correcta";
    document.getElementById("respuesta1").innerHTML = mensj;
}
else {  
    mensj="Las contraseña es incorrecta";
    document.getElementById("respuesta1").innerHTML = mensj;
}
}

boton_compra1.onclick = () => {
    let mensj1="";
    let price = document.getElementById("compra1").dataset.price;
    let cantidad = document.getElementById("Libreta").value;
    let name=document.getElementById("compra1").dataset.name;
    if(cantidad  < 1 || cantidad  > 50) {
        alert("La cantidad ingresada no está permitida por el stock");
        return;
    }
    productos.cantidadLibreta=productos.cantidadLibreta+cantidad*1;
    productos.precioLibreta=productos.cantidadLibreta*price;
    mensj1= `<div class="article-card"><h5>Producto: ${name}</h5><p>Cantidad: ${productos.cantidadLibreta}</p><p> Precio:$${price}</p><p>Costo: $${productos.precioLibreta}</p></div><div class="divider"></div>`;
    totalf();
    document.getElementById("libr").innerHTML = mensj1;
}
boton_compra2.onclick = () => {
    let mensj1="";
    let price = document.getElementById("compra2").dataset.price;
    let cantidad = document.getElementById("Carpeta").value;
    let name=document.getElementById("compra2").dataset.name;
    if(cantidad  < 1 || cantidad  > 50) {
        alert("La cantidad ingresada no está permitida por el stock");
        return;
    }
    productos.cantidadCarpeta=productos.cantidadCarpeta+cantidad*1;
    productos.precioCarpeta=productos.cantidadCarpeta*price;
    mensj1= `<div class="article-card"><h5>Producto: ${name}</h5><p>Cantidad: ${productos.cantidadCarpeta}</p><p> Precio:$${price}</p><p>Costo: $${productos.precioCarpeta}</p></div><div class="divider"></div>`;
    totalf();
    document.getElementById("Carp").innerHTML = mensj1;

}
boton_compra3.onclick = () => {
    let mensj1="";
    let price = document.getElementById("compra3").dataset.price;
    let cantidad = document.getElementById("Boli").value;
    let name=document.getElementById("compra3").dataset.name;
    if(cantidad  < 1 || cantidad  > 50) {
        alert("La cantidad ingresada no está permitida por el stock");
        return;
    }
    productos.cantidadBoli=productos.cantidadBoli+cantidad*1;
    productos.precioBoli=productos.cantidadBoli*price;
    mensj1= `<div class="article-card"><h5>Producto: ${name}</h5><p>Cantidad: ${productos.cantidadBoli}</p><p> Precio:$${price}</p><p>Costo: $${productos.precioBoli}</p></div><div class="divider"></div>`;
    totalf();
    document.getElementById("Bol").innerHTML = mensj1;

}
boton_compra4.onclick = () => {
    let mensj1="";
    let price = document.getElementById("compra4").dataset.price;
    let cantidad = document.getElementById("Mochila").value;
    let name=document.getElementById("compra4").dataset.name;
    if(cantidad  < 1 || cantidad  > 50) {
        alert("La cantidad ingresada no está permitida por el stock");
        return;
    }
    productos.cantidadMochi=productos.cantidadMochi+cantidad*1;
    productos.precioMochi=productos.cantidadMochi*price;
    mensj1= `<div class="article-card"><h5>Producto: ${name}</h5><p>Cantidad: ${productos.cantidadMochi}</p><p> Precio:$${price}</p><p>Costo: $${productos.precioMochi}</p></div><div class="divider"></div>`;
    totalf();
    document.getElementById("moch").innerHTML = mensj1;

}

boton_limpiar.onclick = () => {
    productos.cantidadLibreta=0;
    productos.cantidadBoli=0;
    productos.cantidadCarpeta=0;
    productos.cantidadMochi=0;
    productos.precioLibreta=0;
    productos.precioCarpeta=0;
    productos.precioBoli=0;
    productos.precioMochi=0;
    document.getElementById("libr").innerHTML = "";
    document.getElementById("Carp").innerHTML = "";
    document.getElementById("Bol").innerHTML = "";
    document.getElementById("moch").innerHTML = "";
    let total=0;
    let iva=0;
    let totalIva=0;
    document.getElementById("total").innerHTML = `$${total}`;
    document.getElementById("iva").innerHTML = `$${iva}`;
    document.getElementById("totIva").innerHTML = `$${totalIva}`;
}

function totalf (){
    let total=productos.precioLibreta+productos.precioCarpeta+productos.precioBoli+productos.precioMochi;
    let iva=total*0.1;
    let totalIva=total+iva;
    document.getElementById("total").innerHTML = `$${total}`;
    document.getElementById("iva").innerHTML = `$${iva}`;
    document.getElementById("totIva").innerHTML = `$${totalIva}`;
}
document.getElementById("limpiar").addEventListener('mouseover', () => {
    carro.insertAdjacentHTML('afterend', `<div class="col s12 banner">Gracias por visitarnos!</div>`)
})


document.querySelectorAll("h4").forEach(btn => btn.addEventListener('mouseover', (event) => {
    event.target.style.color = 'rgba(255, 0.8, 1, 0.5)';
}));
