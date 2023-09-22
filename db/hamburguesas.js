let hamurguesas = [];

fetch('./db/data.JSON')
    .then(response => response.json())
    .then(data => {
        hamburguesas = data
        console.log(data);

    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
    });