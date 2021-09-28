const apikey = "8f97e55c6a6d536f19ba0413aa6558d8";
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city){
    const response = await fetch (url(city), {origin:"cors"});
    const responseJson = await response.json();
   // console.log(responseJson)
    addWeatherToPage(responseJson)
}
//getWeatherByLocation("Boston")
function addWeatherToPage(data) {
    const temp = KtoF(data.main.temp)
    const weather = document.createElement("div")
    weather.classList.add("weather")
    weather.innerHTML = `
    <small>There are</small>
    ${temp}°F
    <p> in ${data.name}</p>`;
    main.appendChild(weather);
}

function KtoF(K){
    return Math.floor(K-459.67)
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const city = search.value 
    getWeatherByLocation(city)
})