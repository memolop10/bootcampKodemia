const pokenum = 5;

const url = `https://pokeapi.co/api/v2/pokemon/${pokenum}/`;

fetch(url)

    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos.name));

    // .catch(error => console.log('no existe ):'));