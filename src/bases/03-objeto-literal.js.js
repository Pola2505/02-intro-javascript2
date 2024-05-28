
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 54322, 
        lat: 14.345,
        lng: 34.987
    },
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );