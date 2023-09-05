export const hamburguesas = [
    {
        id: 1,
        nombre: "Hamburguesa Marte",
        precio: 1600,
        imagen: "../img/hamburguesa_marte.jpg"
    },
    {
        id: 2,
        nombre: "Hamburguesa Mercurio",
        precio: 2000,
        imagen: "../img/hamburguesa_mercurio.jpg"
    },
    {
        id: 3,
        nombre: "Hamburguesa Saturno",
        precio: 2000,
        imagen: "../img/hamburguesa_saturno.jpg"
    },
    {
        id: 4,
        nombre: "Hamburguesa Tierra",
        precio: 1800,
        imagen: "../img/hamburguesa_tierra.jpg"
    },
    {
        id: 5,
        nombre: "Hamburguesa Jupiter",
        precio: 1800,
        imagen: "../img/hamburguesa_jupiter.jpg"
    },
    {
        id: 6,
        nombre: "Hamburguesa Urano",
        precio: 2200,
        imagen: "../img/hamburguesa_urano.jpg"
    },
    {
        id: 7,
        nombre: "Hamburguesa Neptuno",
        precio: 1900,
        imagen: "../img/hamburguesa_neptuno.jpg"
    },
    {
        id: 8,
        nombre: "Hamburguesa Venus",
        precio: 2100,
        imagen: "../img/hamburguesa_venus.jpg"
    },
];

JSON.parse(localStorage.getItem("hamburguesas")) || localStorage.setItem("hamburguesas", JSON.stringify(hamburguesas));

// const mostrarMenu = () => {
//     hamburguesas.forEach(hamburguesa => {
//         alert(`
//         ID: ${hamburguesa.id}
//         Nombre: ${hamburguesa.nombre}
//         Precio: $${hamburguesa.precio}
//         `);
//     });
// };

// alert("Bienvenido");
// let opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
// const encontrarHambrguesa = id => hamburguesas.find(hamburguesa => hamburguesa.id === id);
// let respuesta = "si";

// while (opcion !== 3) {
//     switch (opcion) {
//         case 1:
//             while (respuesta === "si") {
//                 const idHamburguesa = parseInt(prompt("Ingrese la hamburguesa que quiere poniendo su id:"));
//                 const hamburguesa = encontrarHambrguesa(idHamburguesa);

//                 if (hamburguesa) {
//                     alert(`Compro la hamburguesa ${hamburguesa.nombre} por $${hamburguesa.precio}. Gracias por su compra!`);
//                 } else {
//                     alert("No se encontro el id de la hamburguesa.");
//                 }
//                 respuesta = prompt("Quiere seguir comprando? responda: 'si' o 'no'");
//                 if (respuesta !== "si") {
//                     break;
//                 }
//             }
//             break;
//         case 2:
//             mostrarMenu();
//             opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
//             break;

//         default:
//             alert("Opción no válida.");
//             opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
//             break;
//     }
//     opcion = parseInt(prompt("Ingrese: '1' para comprar una hamburguesa. Ingrese: '2' para ver el menu. Ingrese '3' para salir"))
//     respuesta = "si"
// };