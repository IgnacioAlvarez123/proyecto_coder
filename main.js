const hamburguesas = [
    { id: 1, nombre: "marte", precio: 1600 },
    { id: 2, nombre: "mercurio", precio: 2000 },
    { id: 3, nombre: "saturno", precio: 2000 },
    { id: 4, nombre: "tierra", precio: 1800 },
];

const mostrarMenu = () => {
    hamburguesas.forEach(hamburguesa => {
        alert(`
        ID: ${hamburguesa.id}
        Nombre: ${hamburguesa.nombre}
        Precio: $${hamburguesa.precio}
        `);
    });
};

alert("Bienvenido");
let opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
const encontrarHambrguesa = id => hamburguesas.find(hamburguesa => hamburguesa.id === id);
let respuesta = "si";

while (opcion !== 3) {
    switch (opcion) {
        case 1:
            while (respuesta === "si") {
                const idHamburguesa = parseInt(prompt("Ingrese la hamburguesa que quiere poniendo su id:"));
                const hamburguesa = encontrarHambrguesa(idHamburguesa);

                if (hamburguesa) {
                    alert(`Compro la hamburguesa ${hamburguesa.nombre} por $${hamburguesa.precio}. Gracias por su compra!`);
                } else {
                    alert("No se encontro el id de la hamburguesa.");
                }
                respuesta = prompt("Quiere seguir comprando? responda: 'si' o 'no'");
                if (respuesta !== "si") {
                    break;
                }
            }
            break;
        case 2:
            mostrarMenu();
            opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
            break;

        default:
            alert("Opción no válida.");
            opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
            break;
    }
    opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
    respuesta = "si"
};