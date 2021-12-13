document.addEventListener('DOMContentLoaded', cityWeather);

function weatherDataFetch( city ) {
    var key = '3e500c624dcb732109cca2a193c15336';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) //convert data to json
        .then(function (data) {
        console.log(data);
    })
        .catch(function () {
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch('Tallinn');
}