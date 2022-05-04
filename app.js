const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
    command: 'validar',
    describe: 'Valida un usuario',

    builder: {
        nombre: {
            describe: 'Nombre del usuario',
            demandOption: true,
            default: 'ingresa el nombre',
            type: 'string'
        },
        codigo: {
            describe: 'Codigo del usuario',
            demandOption: true,
            default: 'ingresa el codigo',
            type: 'string'
        }
    },
    handler: function(argv) {
        //console.log(chalk.green('Nombre: ' + argv.nombre));
        //console.log(chalk.green('Codigo: ' + argv.codigo));
        console.log(argv);
        validaUsuario(argv.nombre, argv.codigo);
    }
})

const validaUsuario = function(nombre, codigo) {
    console.log("nombre : " + nombre);
    console.log("codigo : " + codigo);
    if (nombre == 'Eduardo' && codigo == 'M02020') {
        console.log(chalk.green.inverse('acceso correcto'));
    } else {
        console.log(chalk.red.inverse('acceso denegado'));
    }
}

yargs.parse();