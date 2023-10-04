const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 5, Guardar= 'Salida') => {

    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {
            console.log('========================='.green);
            console.log(' Tabla del'.green, colors.blue(base));
            console.log('=========================');
            console.log(salida);
        }

       

        const Carpeta = `${Guardar}/tabla-${base}.txt`;
        fs.writeFileSync(Carpeta, salida);

        return Carpeta;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}