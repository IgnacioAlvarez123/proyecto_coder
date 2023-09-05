


const divHamburguesas = document.getElementById("hamburguesas")

let menuHamburguesas = JSON.parse(localStorage.getItem("hamburguesas"))

document.addEventListener("DOMContentLoaded", () => {
    cardsHamburguesas(menuHamburguesas)
})

let hamburguesa1 = {}
let contador = 1

const cardsHamburguesas = (hamburguesas) => {
    hamburguesas.forEach(hamburguesa => {
        let card = document.createElement("div")
        if(contador %2 == 0){
        card.className = "hamburguesa"
        card.innerHTML = `
        <div class="div_menu">
                    <div class="menu_tablet">
                    <img class="imagenes" src="${hamburguesa1.imagen}">
                    <div class = "precios">
                    <h3 class="h2_menu">Hamburguesa ${hamburguesa1.nombre}</h3>
                    <h4 class="h2_menu">$${hamburguesa1.precio}</h4>
                        </div>
                    </div>
                    <div class="menu_tablet">
                    <img class="imagenes" src="${hamburguesa.imagen}">
                    <div class = "precios">
                    <h3 class="h2_menu">Hamburguesa ${hamburguesa.nombre}</h3>
                    <h4 class="h2_menu">$${hamburguesa.precio}</h4>
                        </div>
                    </div>
                    >
                </div>
</div>
        `}
        hamburguesa1 =  hamburguesa
        contador ++
        divHamburguesas.appendChild(card)
    });
}