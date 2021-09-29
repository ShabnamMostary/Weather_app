const apikey = "8f97e55c6a6d536f19ba0413aa6558d8";
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city){
    const response = await fetch (url(city), {origin:"cors"});
    const responseJson = await response.json();
    console.log(responseJson)
    addWeatherToPage(responseJson)
}
//getWeatherByLocation("Boston")
function addWeatherToPage(data) {
    const temp = KtoF(data.main.temp)
    const weather = document.createElement("div")
    weather.classList.add("weather")
    main.innerHTML = "";
    weather.innerHTML = `

    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°F<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].description} </small></br>
    <small>wind ${data.wind.speed} m/s</small>
        `;
    main.appendChild(weather);
    
}

function KtoF(K){
    return Math.floor((K-273.15) * 9/5 + 32 )
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const city = search.value 
    getWeatherByLocation(city)
})