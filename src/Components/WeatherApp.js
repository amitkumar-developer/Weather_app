import React, { useState } from 'react';


const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  
   

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (location.trim() === '') {
      alert('Please enter a city name');
      return;
    }
    getWeatherData();
  };

  const getWeatherData = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${"5c86490ff1685b81ccc2dcc182a48a32"}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
 
      })
   
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      <div className="bg-red-400 shadow-lg rounded-lg p-6">
        <h2 className=" text-2xl mb-4">Weather App</h2>
        <form onSubmit={handleFormSubmit} >
          <input 
            type="text"
            placeholder="Enter city name"
            value={location}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 "
          >
            Check Weather
          </button>
        </form>
        
        {weatherData && (
          <div className="bg-pink-600">
            <h3 className=" text-xl mb-2">{weatherData.name}</h3>
            <p className="mb-2">
              Temperature: {weatherData.main.temp} Kelvin
            </p>
            <p className="mb-2">Humidity: {weatherData.main.humidity}%</p>
            <p className="mb-2">Visibility: {weatherData.visibility} meters</p>
    <p className="mb-2">Wind Speed: {weatherData.wind.speed} m/s</p>
   
            <p>Weather: {weatherData.weather[0].main}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
