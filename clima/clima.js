const axios = require('axios');

const getClima = async(lat, lng) => {
    var respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7872105014c60e3a7567bc83b4f7d871&units=metric`)
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}