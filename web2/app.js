// Muestra los productos de la tienda y permite seleccionar uno o ver el carrito
function seleccionarProducto() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    mensaje += "\nIngresa el número del producto que deseas agregar al carrito.";
    mensaje += "\nIngresa '5' para ver el carrito y finalizar.";
    mensaje += "\nIngresa '6' para ver el carrito sin finalizar la compra.";

    let seleccion = parseInt(prompt(mensaje));
    return seleccion;
}

// Lista de productos 
let productos = [
    { id: 1, nombre: "Camisa", precio: 250 },
    { id: 2, nombre: "Pantalon", precio: 300 },
    { id: 3, nombre: "Zapatos", precio: 800 },
    { id: 4, nombre: "Sombrero", precio: 100 }
];

// es un array que almacenará los productos seleccionados
let carrito = [];

// Esta función agrega un producto al carrito de compras
function agregarAlCarrito(idProducto) {
    let producto = productos.find(prod => prod.id === idProducto);
    if (producto) {
        carrito.push(producto);
        alert(`Has agregado ${producto.nombre} al carrito.`);
    } else {
        alert("El producto no existe.");
    }
}

// calculamos el total del carrito usando una función flecha
const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
};

// Función para ver el carrito
function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        });
        mensaje += `\nTotal: $${calcularTotal()}`;
        alert(mensaje);
    }
}

// selecciona productos y visualizar el carrito
function iniciarCompra() {
    let seleccion;
    do {
        seleccion = seleccionarProducto();
        if (seleccion > 0 && seleccion <= productos.length) {
            agregarAlCarrito(seleccion);
        } else if (seleccion === 5) {
            
            verCarrito();
            break;
        } else if (seleccion === 6) {
            
            verCarrito();
        } else {
            alert("Por favor, selecciona una opción válida.");
        }
    } while (seleccion !== 0);
}

iniciarCompra();
