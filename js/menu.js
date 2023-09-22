import { comprarHamburguesa } from "./carrito.js";

const divHamburguesas = document.getElementById("hamburguesas")

export let menuHamburguesas = JSON.parse(localStorage.getItem("hamburguesas"))

document.addEventListener("DOMContentLoaded", () => {
    cardsHamburguesas(menuHamburguesas);
})

export const cardsHamburguesas = (hamburguesas) => {

    hamburguesas.forEach(hamburguesa => {

        let card = document.createElement("div")

        card.className = "hamburguesa"
        card.innerHTML = `
            <div class="div_menu">
                    <img class="imagenes" src="${hamburguesa.imagen}">
                    <div class="precios">
                        <h3 class="h2_menu">Hamburguesa ${hamburguesa.nombre}</h3>
                        <h4 class="h2_menu">$${hamburguesa.precio}</h4>
                        <button id="boton${hamburguesa.id}" class="mi_boton">Comprar</button>
                    </div>
        </div>
        `

        divHamburguesas.appendChild(card)

        const btnComprar = document.getElementById(`boton${hamburguesa.id}`)
        btnComprar.addEventListener("click", () => comprarHamburguesa(hamburguesa.id))

    });


}