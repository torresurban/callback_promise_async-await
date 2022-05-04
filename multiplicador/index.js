const colors = require('colors');
const fs = require('fs');
const {logica} = require('./logica')


const multiplicar = (base, limite, visualizar) => {

    const resultado = logica(base, limite);

    if (visualizar) {
        console.log('======================='.green)
        console.log((`Tabla del ${base}`.green))
        console.log('======================='.green)
        console.log(resultado.magenta)
    }

    const nombreArchivo = `tabla-del-${base}.txt`;

    fs.writeFileSync(`tablas/${nombreArchivo}`, resultado, err => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} ha sido creado`);
    });
};

module.exports = {
    multiplicar
}
