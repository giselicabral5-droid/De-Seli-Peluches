const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {

    // Productos del index
    if (elementos1) {
        elementos1.addEventListener('click', comprarElemento);
    }

    // Productos de Productos.html
    if (elementos2) {
        elementos2.addEventListener('click', comprarElemento);
    }

    // Eliminar productos
    if (carrito) {
        carrito.addEventListener('click', eliminarElemento);
    }

    // Vaciar carrito
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }
}

function comprarElemento(e) {

    // Solo funciona con botones agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {

        e.preventDefault();

        // Busca la tarjeta correcta
        const elemento = e.target.closest('.ofert-1, .producto-card');

        if (elemento) {
            leerDatosElemento(elemento);
        }
    }
}

function leerDatosElemento(elemento) {

    let titulo = '';

    // Detecta si usa h2 o h3
    if (elemento.querySelector('h2')) {

        titulo = elemento.querySelector('h2').textContent;

    } else if (elemento.querySelector('h3')) {

        titulo = elemento.querySelector('h3').textContent;
    }

    const infoElemento = {

        imagen: elemento.querySelector('img').src,

        titulo: titulo,

        precio: elemento.querySelector('.precio').textContent,

        id: elemento.querySelector('.agregar-carrito').getAttribute('data-id')
    };

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="80">
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {

    if (e.target.classList.contains('borrar')) {

        e.preventDefault();

        const producto = e.target.closest('tr');

        if (producto) {
            producto.remove();
        }
    }
}

function vaciarCarrito(e) {

    e.preventDefault();

    // Limpia completamente el carrito
    lista.innerHTML = '';
}