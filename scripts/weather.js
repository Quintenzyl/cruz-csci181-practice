// step 1: declare your state variables
let is_loading = false;
let error_message = "";
let weather_data = null;

// step 2: select your weather output container
const output_element = document.querySelector("#weather-output")

// step 3: create weather rendering function
function renderWeather() {
    if (is_loading) {
        output_element.innerHTML = "Loading...";
    }
    if (error_message) {
        output_element.innerHTML = "Error, problem retrieving weather data.";
    }
    if (weather_data) {
        const temp = weather_data.properties.periods[0].temperature;
        const forecast = "test text";
        forecast.className = "#weather-output p"
        console.log(forecast.className);
        output_element.innerHTML =  temp + "&deg;F" + "<br>" + forecast;
    }
    else {
        output_element.innerHTML = "Weather data not available."
    }
}

// step 4: create an async function
async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch("https://api.weather.gov/gridpoints/MSO/105,131/forecast");
    if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
    }
    weather_data = await response.json();
    console.log("Success:", weather_data)
  } catch(error) {
    error_message = error.message;
    console.error("Error:", error_message)
  } finally {
    is_loading = false;
    renderWeather();
    console.log("Request finished.")
  }
}

getWeatherData();