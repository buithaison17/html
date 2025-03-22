const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}

const searchElement = document.querySelector('.search');
const btnSearchElement = document.querySelector('.btnSearch');
const cityGroupElement = document.querySelector('.city-group');
const cityName = Object.keys(weatherData);

function renderWeatherCity(city){
    return `<h1 class="cityOfName">${city}</h1>
            <div class="cityWeather">
                <div class="icon">${weatherData[city].icon}</div>
                <p class="temperature">${weatherData[city].temperature}&#8451;</p>
                <div class="cityWeatherDetail">
                    <p class="description">${weatherData[city].description}</p>
                    <p class="humidity">Độ ẩm: ${weatherData[city].humidity}%</p>
                    <p class="windSpeed">Tốc độ gió: ${weatherData[city].windSpeed} km/h</p>
                </div>
            </div>`
}

btnSearchElement.addEventListener('click', function(){
    const findCity = cityName.find(cityName => cityName.toLocaleLowerCase() === searchElement.value.toLocaleLowerCase());

    if(findCity !== undefined){
        cityGroupElement.innerHTML = renderWeatherCity(findCity);
        cityGroupElement.style.display = 'flex';
    }
    else{
        alert('Thành phố không tồn tại');
    }
})