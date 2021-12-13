document.addEventListener('DOMContentLoaded', cityWeather);

function weatherDataFetch( city ) {
    var key = '3e500c624dcb732109cca2a193c15336';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) //convert data to json
        .then(function (data) {
        console.log(data);
        drawWeather(data);
    })
        .catch(function () {
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch('Tallinn');
}

function drawWeather( data ) {
    var celsius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celsius + '&deg';
    document.querySelector('#location').innerHTML = data.name;
}