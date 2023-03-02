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
const forecastCardDays = document.querySelectorAll(".days");
const forecastCardTemp = document.querySelectorAll(".forecast-temp-data");
const forecastRainData = document.querySelectorAll(".forecast-rain-data");
const forecastHumidityData = document.querySelectorAll(
  ".forecast-humidity-data"
);
const forecastCardImage = document.querySelectorAll(".forecast-image-data");
const forecastDate = document.querySelectorAll(".forecast-date");
const forecastCondition = document.querySelectorAll(
  ".forecast-weather-condition"
);


const getCurrentLocation = () => {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					resolve({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				() => {
					reject('Unable to retrieve location data');
				}
			);
		} else {
			reject('Geolocation is not supported by this browser');
		}
	});
};




const onPageLoad = async () => {

 let locationData;
 try {
		locationData = await getCurrentLocation();
 } catch (error) {
		console.error(error);
		locationData = { latitude: null, longitude: null };
 }

const apiCallWithLocation = `https://api.weatherapi.com/v1/forecast.json?key=e9f03c0935864a1ba58105924231102&q=${locationData.latitude},${locationData.longitude}&days=7`;

const defaultApiCall = `https://api.weatherapi.com/v1/forecast.json?key=e9f03c0935864a1ba58105924231102&q=kolkata&days=7`;

const data = await fetch(
	locationData.latitude && locationData.longitude
		? apiCallWithLocation
		: defaultApiCall
);

  const defaultWeatherData = await data.json();

  currTemp.innerText = defaultWeatherData.current.temp_c;
  // weatherImage.src = defaultWeatherData.current.condition.icon;
  weatherStatus.innerText = defaultWeatherData.current.condition.text;
  cityName.innerText = defaultWeatherData.location.name;
  countryName.innerText = defaultWeatherData.location.country;
  uvIndex.innerText = defaultWeatherData.current.uv;
  windSpeed.innerText = `${defaultWeatherData.current.wind_kph} km/h`;
  sunriseTime.innerText =
    defaultWeatherData.forecast.forecastday[0].astro.sunrise;
  sunsetTime.innerText =
    defaultWeatherData.forecast.forecastday[0].astro.sunset;
  humidity.innerText = defaultWeatherData.current.humidity;
  visibility.innerText = defaultWeatherData.current.vis_km;
  feelsLike.innerText = defaultWeatherData.current.feelslike_c;

  for (let i = 0; i <= 6; i++) {
    const dateData = defaultWeatherData.forecast.forecastday[i].date;
    const dateString = dateData.split("-").join(",");
    const date = new Date(dateString);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    forecastDate[i].innerText = defaultWeatherData.forecast.forecastday[i].date;
    forecastCardDays[i].innerText = daysOfWeek[date.getDay()];
    forecastCardDays[0].innerText = "Today";
    forecastCardDays[1].innerText = "Tomorrow";
    forecastCondition[i].innerText =
      defaultWeatherData.forecast.forecastday[i].day.condition.text;
    forecastCardTemp[i].innerText =
      defaultWeatherData.forecast.forecastday[i].day.avgtemp_c;
    forecastRainData[i].innerText =
      defaultWeatherData.forecast.forecastday[i].day.daily_chance_of_rain;
    forecastHumidityData[i].innerText =
      defaultWeatherData.forecast.forecastday[i].day.avghumidity;
    forecastCardImage[i].src =
      defaultWeatherData.forecast.forecastday[i].day.condition.icon;
  }
};

onPageLoad();

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

  for (let i = 0; i <= 6; i++) {
    const dateData = data.forecast.forecastday[i].date;
    const dateString = dateData.split("-").join(",");
    const date = new Date(dateString);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    forecastDate[i].innerText = data.forecast.forecastday[i].date
      .split("-")
      .join("/");
    forecastCardDays[i].innerText = daysOfWeek[date.getDay()];
    forecastCardDays[0].innerText = "Today";
    forecastCardDays[1].innerText = "Tomorrow";
    forecastCondition[i].innerText =
      data.forecast.forecastday[i].day.condition.text;
    forecastCardTemp[i].innerText = data.forecast.forecastday[i].day.avgtemp_c;
    forecastRainData[i].innerText =
      data.forecast.forecastday[i].day.daily_chance_of_rain;
    forecastHumidityData[i].innerText =
      data.forecast.forecastday[i].day.avghumidity;
    forecastCardImage[i].src = data.forecast.forecastday[i].day.condition.icon;
  }
};
