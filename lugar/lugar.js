const axios = require('axios');

const getLugarLatLng = async(descripcion) => {

    const encodeURL = encodeURI(descripcion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': 'e50c2366fcmsh683b59f6075e524p1372ffjsn0353679cb6a7' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.lenght === 0)
        throw new Error(`No hay resultados para ${direccion}`);

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}