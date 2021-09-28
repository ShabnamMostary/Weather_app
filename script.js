const apikey = "8f97e55c6a6d536f19ba0413aa6558d8";
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city){
    const response = await fetch (url(city), {origin:"cors"});
    const responseJson = await response.json();
    console.log(responseJson)
}
//getWeatherByLocation("Boston")

function KtoF(K){
    return Math.floor(K-459.67)
}