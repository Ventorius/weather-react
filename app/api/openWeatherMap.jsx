var axios = require('axios');

const OPEN_WEATHER_MAP_URL = '//api.openweathermap.org/data/2.5/weather?appid=f03d91ecc7d0b0ed7cf1213538221a98&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {

            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }

        }, function (err) {
            throw new Error('Unable to fetch weather for this location');
        })
    }
};
