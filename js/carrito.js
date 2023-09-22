import { menuHamburguesas } from "./menu.js";


JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listaCarrito = document.getElementById("items")
const footCarrito = document.getElementById("totales")
const btnCarrito = document.getElementById("btnCarrito")
const carritoTabla = document.getElementById("carrito")

btnCarrito.addEventListener("click", () => {
    mostrarCarrito()
    if (carritoTabla.style.display === "block")
        carritoTabla.style.display = "none"
    else {
        carritoTabla.style.display = "block"
    }
})

export const comprarHamburguesa = (idHamburguesa) => {

    const hamburguesa = menuHamburguesas.find((hamburguesa) => hamburguesa.id === idHamburguesa)

    const { nombre, precio, imagen, id } = hamburguesa

    const hamburguesaCarrito = carrito.find((hamburguesa) => hamburguesa.id === idHamburguesa)

    if (hamburguesaCarrito === undefined) {
        const nuevaHamburguesaCarrito = {
            id: id,
            nombre: nombre,
            imagen: imagen,
            precio: precio,
            cantidad: 1,
        }

        carrito.push(nuevaHamburguesaCarrito)

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    } else {
        const indexHamburguesaCarrito = carrito.findIndex((hamburguesa) => hamburguesa.id === idHamburguesa)

        carrito[indexHamburguesaCarrito].cantidad++
        carrito[indexHamburguesaCarrito].precio = precio * carrito[indexHamburguesaCarrito].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))

    Toastify({

        text: `Usted ha agregado al carrito la ${hamburguesa.nombre}`,

        duration: 3000

    }).showToast();

}

const mostrarCarrito = () => {

    listaCarrito.innerHTML = ""
    carrito.forEach(hamburguesa => {

        const { id, nombre, imagen, precio, cantidad } = hamburguesa

        let body = document.createElement("tr")

        body.className = "productoCarrito"

        body.innerHTML = `
        <th><img id="fotoHamburguesaCarrito" src="${imagen}"class="card-img-top" style="width:40%; height: 30%"</th>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio / cantidad}</td>
        <td>${precio}</td>
        <td>
        <button id="+${id}" class="btn btn-success">+</button>
        <button id="-${id}" class="btn btn-danger">-</button>
        </td>
        `

        listaCarrito.append(body)

        const btnAgregar = document.getElementById(`+${id}`)
        const btnRestar = document.getElementById(`-${id}`)

        btnAgregar.addEventListener("click", () => aumentarCantidad(id))
        btnRestar.addEventListener("click", () => restarCantidad(id))
    });

    mostrarFooter()

    const btnComprar = document.createElement("button");
    btnComprar.id = "btnComprar";
    btnComprar.className = "btn btn-primary";
    btnComprar.innerText = "Comprar";

    btnComprar.addEventListener("click", () => {
        Swal.fire({
            title: 'Gracias por su compra!',
            text: 'Recibirá su hamburguesa en unos minutos',
            icon: 'success'
        });
    });

    // Agrega el botón "Comprar" al final de la lista
    listaCarrito.append(btnComprar);
};


const mostrarFooter = () => {

    if (carrito.length > 0) {
        footCarrito.innerHTML = ""

        let footer = document.createElement("tr")

        footer.innerHTML = `
        <th><b>Totales:</b></th>
        <td></td>
        <td>${generarTotal().cantidadTotal}</td>
        <td></td>
        <td>${generarTotal().costoTotal}</td>
        `

        footCarrito.append(footer)
    } else {
        footCarrito.innerHTML = "<p>No hay producto en carrito</p>"
    }

}

const generarTotal = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, { cantidad }) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }


}

const aumentarCantidad = (id) => {
    const indexHamburguesaCarrito = carrito.findIndex((hamburguesa) => hamburguesa.id === id)
    const precio = carrito[indexHamburguesaCarrito].precio / carrito[indexHamburguesaCarrito].cantidad

    carrito[indexHamburguesaCarrito].cantidad++
    carrito[indexHamburguesaCarrito].precio = precio * carrito[indexHamburguesaCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()

}

const restarCantidad = (id) => {
    const indexHamburguesaCarrito = carrito.findIndex((hamburguesa) => hamburguesa.id === id)
    const precio = carrito[indexHamburguesaCarrito].precio / carrito[indexHamburguesaCarrito].cantidad

    carrito[indexHamburguesaCarrito].cantidad--
    carrito[indexHamburguesaCarrito].precio = precio * carrito[indexHamburguesaCarrito].cantidad

    if (carrito[indexHamburguesaCarrito].cantidad === 0) {
        carrito.splice(indexHamburguesaCarrito, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}