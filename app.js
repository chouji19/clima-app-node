const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'App de cciudades descripcion',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        var lug = await lugar.getLugarLatLng(argv.direccion);
        var clim = await clima.getClima(lug.lat, lug.lng)
        return `El Clima de ${lug.direccion} es ${clim}`;
    } catch (error) {
        return `No se encontro info para la direccion: ${direccion}`;
    }
};


// 

getInfo(argv.direccion).then(console.log).catch(console.log);