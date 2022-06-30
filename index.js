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

const listaProductos = [
    {
        id:1,
        nombre:"Kit razer",
        precioCompra: "$6000",
        precioVenta: "$12000",
        cantidad: "5",
    },
    {
        id:1,
        nombre:"Kit Logitech",
        precioCompra: "$4500",
        precioVenta: "$9000",
        cantidad: "5",
    },
    {
        id:1,
        nombre:"Kit HyperX",
        precioCompra: "$4000",
        precioVenta: "$8000",
        cantidad: "5",
    },
    {
        id:1,
        nombre:"Kit Red-dragon",
        precioCompra: "$3000",
        precioVenta: "$5000",
        cantidad: "5",
    },
]

for (producto of listaProductos){
    console.log(producto.nombre);
    console.log(producto.precioVenta);
  }

  // OTRO EJEMPLO
/*
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
const productos = []
productos.push(new Kits("Kit Razer", "12000"))
productos.push(new Kits("Kit Logitech", "9000"))
productos.push(new Kits("Kit HyperX", "8000"))
productos.push(new Kits("Kit Red-dragon", "5000"))
for (const producto of productos) {
    producto.vender()
    console.log(productos)
}
*/
