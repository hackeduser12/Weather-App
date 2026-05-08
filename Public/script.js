const cityInput = document.getElementById('city');
const submitBtn = document.getElementById('submit');
const cityName = document.getElementById('cityName');

const getWeather = async (city) => {
  cityName.innerHTML = city;
  const url = `/api/weather?city=${city}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    // Fill main weather cards
    document.getElementById('temp').innerHTML = result.current.temp_c + ' °C';
    document.getElementById('feels_like').innerHTML = result.current.feelslike_c + ' °C';
    document.getElementById('heatindex').innerHTML = result.current.heatindex_c + ' °C';
    document.getElementById('visibility').innerHTML = result.current.vis_km + ' km';
    document.getElementById('pressure').innerHTML = result.current.pressure_mb + ' hPa';
    document.getElementById('humidity').innerHTML = result.current.humidity + ' %';
    document.getElementById('gustspeed').innerHTML = result.current.gust_kph + ' kph';
    document.getElementById('winddegree').innerHTML = result.current.wind_degree + ' °';
    document.getElementById('windspeed').innerHTML = result.current.wind_kph + ' kph';

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Event listener for submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

// Load default city on page load
getWeather("Lucknow");

// Set current date
const dateElem = document.getElementById("currentDate");
const currentDate = new Date().toLocaleDateString(undefined, {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
dateElem.textContent = `Date: ${currentDate}`;

// Load weather data for other common cities
const otherCities = ["London", "Delhi", "Tokyo", "New York", "Mumbai"];
const tableBody = document.querySelector("table tbody");

const fetchOtherCity = async (city) => {
  try {
    const response = await fetch(`/api/weather?city=${city}`);
    const result = await response.json();

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${city}</td>
      <td>${result.current.feelslike_c} °C</td>
      <td>${result.current.humidity} %</td>
      <td>${result.current.temp_c} °C</td>
      <td>${result.current.wind_degree} °</td>
      <td>${result.current.wind_kph} kph</td>
    `;
    tableBody.appendChild(row);
  } catch (err) {
    console.error(`Error loading ${city}:`, err);
  }
};

otherCities.forEach(fetchOtherCity);
