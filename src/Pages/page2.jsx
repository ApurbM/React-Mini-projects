import React, { useState } from 'react'
import { WiDaySunny, WiCloudy, WiRain, WiFog, WiDayHaze, WiSnow, WiThunderstorm } from "react-icons/wi";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({
    name: "",
    weather_icons: "",
    weather_descriptions: [],
    temperature: 0,
    localtime_epoch: 0,
    pressure: 0,
    humidity: 0
  });

  // mapping climate description -> icons
  const weatherIconsMap = {
    Sunny: <WiDaySunny size={80} color="#facc15" />,   // yellow sun
    Clear: <WiDaySunny size={80} color="#facc15" />,
    Haze: <WiDayHaze size={80} color="#f59e0b" />,
    Mist: <WiFog size={80} color="#94a3b8" />,
    Fog: <WiFog size={80} color="#94a3b8" />,
    Cloudy: <WiCloudy size={80} color="#64748b" />,
    Overcast: <WiCloudy size={80} color="#64748b" />,
    Rain: <WiRain size={80} color="#0ea5e9" />,
    Showers: <WiRain size={80} color="#0ea5e9" />,
    Snow: <WiSnow size={80} color="#38bdf8" />,
    Thunderstorm: <WiThunderstorm size={80} color="#475569" />
  };

  async function fetchWeatherInfo() {
    const url = `https://api.weatherstack.com/current?access_key=ea94fae41a59bcecfea2456c45dfa6e3&query=${location}`;
    const options = { method: 'GET' };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setWeatherInfo({
        name: result.request.query,
        weather_icons: result.current.weather_icons,
        weather_descriptions: result.current.weather_descriptions[0],
        temperature: result.current.temperature,
        localtime_epoch: result.current.localtime_epoch,
        pressure: result.current.pressure,
        humidity: result.current.humidity
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-[98vh] bg-gradient-to-br from-blue-100 to-blue-200">
     
      <div className="w-100 text-center p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center">
        <h1 className="text-3xl p-5 text-blue-700 font-bold font-mono">Weather App</h1>
        
        <div>
          <input
            type="text"
            placeholder="Enter Your City Name"
            className="outline-none bg-gray-100 p-2 w-60 rounded m-1 border border-gray-300"
            onChange={(e)=> setLocation(e.target.value)}
            value={location}
          />
          <button
            className="ml-2 outline-none px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            onClick={fetchWeatherInfo}
          >
            Search
          </button>
        </div>

        {weatherInfo.name === "" ? (
          <p className="mt-5 text-gray-500">Nothing to Show</p>
        ) : (
          <>
            <p className="text-blue-600 font-bold font-mono text-xl mt-4">
              Weather in {weatherInfo.name}
            </p>

            {/* ICON */}
            <div className="mt-4">
              {weatherIconsMap[weatherInfo.weather_descriptions] || <WiCloudy size={80} color="#64748b" />}
            </div>

            <p className="mt-2 text-lg text-gray-600">
              {weatherInfo.weather_descriptions}
            </p>

            <div className="flex flex-col items-center p-8 gap-5 text-gray-700">
              <p><span className="font-semibold">Temperature:</span> {weatherInfo.temperature} °C</p>
              <p><span className="font-semibold">Humidity:</span> {weatherInfo.humidity}%</p>
              <p><span className="font-semibold">Pressure:</span> {weatherInfo.pressure} Pa</p>
            </div>   
          </>
        )}
      </div>


    </div>
  )
}

export default WeatherApp
