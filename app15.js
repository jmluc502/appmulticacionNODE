const{crearArchivo }= require('./helpers/multiplicar4')
const color = require('colors')
const argv= require('./config/yargs3')

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch(err => console.log(err));