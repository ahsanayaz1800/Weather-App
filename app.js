
function searchBtn(){
let getInp = document.getElementById("inp").value
let getImg = document.getElementById("weatherImg")
let getWeatherHeading = document.getElementById("weatherHeading")
let getCityHeading = document.getElementById("cityHeading")
let getHumidityHeading = document.getElementById("humidityHeading")
let getWindHeading = document.getElementById("windHeading")


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getInp}&appid=86e4a9059ffccdbe666a3331799527d4`)
.then(data=>data.json())
.then(data=>{
    console.log(data)

    if(data.weather[0].main == "Clouds"){
        getImg.src = "assets/images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        getImg.src = "assets/images/clear.png"
        
    }
    else if(data.weather[0].main == "Drizzle"){
        getImg.src = "assets/images/drizzle.png"
        
    }
    else if(data.weather[0].main == "Humidity"){
        getImg.src = "assets/images/humidity.png"
        
    }
    else if(data.weather[0].main == "Mist"){
        getImg.src = "assets/images/mist.png"
        
    }
    else if(data.weather[0].main == "Rain"){
        getImg.src = "assets/images/rain.png"
        
    }
    else if(data.weather[0].main == "Snow"){
        getImg.src = "assets/images/snow.png"
        
    }
    else if(data.weather[0].main == "Smoke"){
        getImg.src = "assets/images/smog.png"
        
    }
    else if(data.weather[0].main == "Wind"){
        getImg.src = "assets/images/wind.png"
        
    }
    let currentWeather = data.main.temp - 273.15
    getWeatherHeading.innerHTML = currentWeather.toFixed(0) + "°C"
    getCityHeading.innerHTML = data.name
    getHumidityHeading.innerHTML = data.main.humidity + "%"
    getWindHeading.innerHTML = data.wind.speed + " km/h"



})

}
