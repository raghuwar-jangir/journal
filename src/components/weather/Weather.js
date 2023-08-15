import React, { useEffect, useState } from "react";
// import fetchCurrentWeather from '../../app/weather_api';
function Weather() {
  // const apiKey = '45324e78cb55400b8f2161331231408';
  // const location = 'New York' // Replace with your desired location
  const [weatherData, setWeatherData] = useState(null);
  const [isDay, setIsDay] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=26.2701056&longitude=73.007104&current_weather=true`);
        if (response.ok) {
          const data = await response.json();
          const currentWeather = data.current_weather;

          setTimeout(() => {
            setWeatherData(currentWeather.temperature);
            setIsDay(currentWeather.is_day);

          }, 1000);

        } else {
          console.error('Error fetching weather data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <section className="weather-container">
      <h2 className="weather-title">Jodhpur</h2>
      <div className="weather-card">
        <div className="weather-info">
          {weatherData ? (<p className="temperature">{weatherData}°C {isDay ? '☀️' : "🌙"}</p>) : (<p>Loading...</p>)}
        </div>

      </div>
    </section>
  );
}

export default Weather;
