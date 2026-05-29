// VARIABLES
const carrito = document.getElementById('carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarBtn = document.getElementById('vaciar-carrito');

const lista1 = document.getElementById('lista-1');
const lista2 = document.getElementById('lista-2');

// EVENTOS
document.addEventListener('DOMContentLoaded', () => {

    // Productos del index
    if (lista1) {
        lista1.addEventListener('click', agregarProducto);
    }

    // Productos de productos.html
    if (lista2) {
        lista2.addEventListener('click', agregarProducto);
    }

    // Eliminar productos
    if (carrito) {
        carrito.addEventListener('click', eliminarProducto);
    }

    // Vaciar carrito
    if (vaciarBtn) {
        vaciarBtn.addEventListener('click', vaciarCarrito);
    }

});

// AGREGAR PRODUCTOS
function agregarProducto(e) {

    if (e.target.classList.contains('agregar-carrito')) {

        e.preventDefault();

        const producto = e.target.closest('.ofert-1, .producto-card');

        leerDatosProducto(producto);
    }
}

// LEER DATOS
function leerDatosProducto(producto) {

    let titulo = '';

    if (producto.querySelector('h2')) {
        titulo = producto.querySelector('h2').textContent;
    }

    if (producto.querySelector('h3')) {
        titulo = producto.querySelector('h3').textContent;
    }

    const infoProducto = {

        imagen: producto.querySelector('img').src,

        titulo: titulo,

        precio: producto.querySelector('.precio').textContent,

        id: producto.querySelector('.agregar-carrito').getAttribute('data-id')
    };

    insertarCarrito(infoProducto);
}

// INSERTAR EN CARRITO
function insertarCarrito(producto) {

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width="70">
        </td>

        <td>
            ${producto.titulo}
        </td>

        <td>
            ${producto.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${producto.id}">
                X
            </a>
        </td>
    `;

    listaCarrito.appendChild(row);
}

// ELIMINAR PRODUCTO
function eliminarProducto(e) {

    if (e.target.classList.contains('borrar')) {

        e.preventDefault();

        const fila = e.target.closest('tr');

        fila.remove();
    }
}

// VACIAR CARRITO
function vaciarCarrito(e) {

    e.preventDefault();

    listaCarrito.innerHTML = '';
}