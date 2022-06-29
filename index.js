function verificacionEdad(edad) {
    if (edad => 18) {
    return true
    } else if (edad < 18) {
    return confirm('¿Tienes permiso de tus padres?')
    }
    }
    
    let edad = prompt('¿Qué edad tienes?', 18)
    
    if ( verificacionEdad(edad) ) {
        alert( 'Acceso otorgado' )
    } else {
        alert( 'Acceso denegado' )
    }

let seleccionUsuario = parseInt(prompt("¿Que kit quiere llevar? \n 1.Kit Razer $12000 \n 2.Kit Logitech $9000 \n 3.Kit HyperX $8000\n 4.Kit Red-dragon $5000"))

if (seleccionUsuario === 1){
    alert("Usted eligio Kit Razer")
} else if (seleccionUsuario === 2){
    alert("Usted eligio Kit Logitech")
} else if (seleccionUsuario === 3) {
    alert("Usted eligio Kit HyperX")
} else if (seleccionUsuario === 4){
    alert("Usted eligio Kit Red-dragon")
}

let producto = parseFloat(prompt("Cuantos productos lleva"))
let precioProducto = 0;

for(let i = 1; i <= producto; i++) {
    let precio = parseFloat(prompt("Ingrese el precio de los productos"))
    precioProducto = precioProducto + precio
}
let total = precioProducto
alert("El total de su compra es: $" + total)
if((total >5000) && (total <=10000)) {
    alert("Su envio sera gratuito")
} else if (total <=5000) {
    alert ("El costo de envio es $500")
}

class Kits {
    constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    }
    vender() {
    this.vendido = true;
    }
}
const producto1 = new Kits("Kit Razer", "12000");
const producto2 = new Kits("Kit Logitech", "9000");
const producto3 = new Kits("Kit HyperX", "8000");
const producto4 = new Kits("Kit Red-dragon", "5000");
producto1.vender();