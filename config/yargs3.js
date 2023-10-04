const argv= require('yargs')
        .option('b', {
            alias: 'base',
            type:'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias:'listar',
            type: 'boolean',
            demandOption: true,
            default:false,
            describe: 'muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            describe: 'Límite superior de la tabla de multiplicar'
        })
        .check((argv, options)=>{
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número'
            }
            if(argv.g && isNaN(argv.h)){
                throw 'EL limite superior tieque ser un número';
            }
            return true;
        })
        .argv
//exits
module.exports = argv;