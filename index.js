let seleccionUsuario = parseInt(prompt("¿Que kit quiere llevar? \n 1.Kit Razer \n 2.Kit Logitech \n 3.Kit HyperX \n 4.Kit Red-dragon"))

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
if((total >=5000) && (total <=10000)) {
    alert("Su envio sera gratuito")
} else if (total <=5000) {
    alert ("El costo de envio es $500")
}

