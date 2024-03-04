const apiKey = "dda1c1577e9ff7ea4b0e60db15505449";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search-bar input");
const searchbtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".Error-msg").style.display = "block";
        document.querySelector(".Weather-container").style.display = "none";
    } else {
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".hum-percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind-speed").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/clouds.png"
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/drizzle.png"
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "Images/snow.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.png"
    }

    document.querySelector(".Weather-container").style.display = "block";
    document.querySelector(".Error-msg").style.display = "none";
    }

    
}


searchbtn.addEventListener("click", () =>{
    checkWeather(search.value);
});


