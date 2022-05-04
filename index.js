const argv = require('yargs')

            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                descripcion: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'limite',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Limite de la tabla de multiplicar'
            })
            .option('v', {
                alias: 'visualizar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Visualizar la tabla de multiplicar en la consola'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw new Error('La base debe ser un numero');
                }
                return true;
            })
            .argv;




            
const {multiplicar} = require('./multiplicador/index')

multiplicar(argv.b, argv.l, argv.v)



