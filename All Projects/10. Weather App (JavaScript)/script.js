const inputBox = document.getElementById("search");
const weatherImage = document.querySelector(".weather-icon");
const currTemp = document.querySelector(".curr-temp");
const weatherStatus = document.querySelector(".weather-status");
const cityName = document.querySelector(".city");
const countryName = document.querySelector(".country");
const uvIndex = document.querySelector(".uv-data");
const windSpeed = document.querySelector(".wind-data");
const sunriseTime = document.querySelector(".sunrise span");
const sunsetTime = document.querySelector(".sunset span");
const humidity = document.querySelector(".humidity-data");
const visibility = document.querySelector(".visibility-data");
const feelsLike = document.querySelector(".feels-like-data");
const forecastCard = document.querySelectorAll(".forecast-card");

let data;

const getData = async (event) => {
  event.preventDefault();

  if (!inputBox.value) {
    alert("Please Enter City Name");
    return;
  }

  const inputValue = inputBox.value;

  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e9f03c0935864a1ba58105924231102&q=${inputValue}&days=7`
  );

  const weatherData = await fetchData.json();
  data = weatherData;
  console.log(data);

  currTemp.innerText = data.current.temp_c;
  weatherImage.src = data.current.condition.icon;
  weatherStatus.innerText = data.current.condition.text;
  cityName.innerText = data.location.name;
  countryName.innerText = data.location.country;
  uvIndex.innerText = data.current.uv;
  windSpeed.innerText = `${data.current.wind_kph} km/h`;
  sunriseTime.innerText = data.forecast.forecastday[0].astro.sunrise;
  sunsetTime.innerText = data.forecast.forecastday[0].astro.sunset;
  humidity.innerText = data.current.humidity;
  visibility.innerText = data.current.vis_km;
  feelsLike.innerText = data.current.feelslike_c;

  let daysOfWeek;
  for (let i = 0; i <= 6; i++) {
    daysOfWeek;
    const dateData = data.forecast.forecastday[i].date;
    const dateString = dateData.split("-").join(",");
    const date = new Date(dateString);
    switch (date.getDay()) {
      case 0:
        daysOfWeek = "Sunday";
        break;
      case 1:
        daysOfWeek = "Monday";
        break;
      case 2:
        daysOfWeek = "Tuesday";
        break;
      case 3:
        daysOfWeek = "Wednesday";
        break;
      case 4:
        daysOfWeek = "Thursday";
        break;
      case 5:
        daysOfWeek = "Friday";
        break;
      case 6:
        daysOfWeek = "Saturday";
        break;
      default:
        break;
    }
  }
};
