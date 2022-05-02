/* setTimeout(() => {
    console.log('Hola, bienvenido');
}, 3000);

const saludar = () => {
    console.log('Hola, bienvenido al curso de NodeJS');
}

setTimeout(saludar, 5000); */

const getUsuarioById = (id) => {
    const usuario = {
        nombre: 'Tommy Torres',
        id
    }
    setTimeout(() => {
        return console.log(usuario.nombre);
    }, 2000);
}

getUsuarioById(1)