
// Desestructuracion
// Asignacion desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

const retornaPersona = ({ nombre, edad, rango = 'Capitan'}) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave, 
        anios: edad, 
        latlng: {
            lat: 14.567,
            lng: -12.456
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona( persona );

console.log( nombreClave, anios )
console.log( lat, lng );



