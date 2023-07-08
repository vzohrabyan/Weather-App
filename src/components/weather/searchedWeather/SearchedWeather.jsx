import React, { useState } from 'react'
import { CONFIG } from '../../../config';
import {RiCelsiusFill} from "react-icons/ri"
import {TbTemperatureFahrenheit, TbTemperatureCelsius} from "react-icons/tb"

const SearchedWeather = ({country}) => { 

    const [temperature, setTemperature] = useState(country.main.temp);

    const weatherIcons = CONFIG.weatherIcons;
    let weatherIcon = `https://openweathermap.org/img/wn/${country.weather[0].icon}@2x.png`;

    const changeImage = (imageID) => {
        let backgroundImage = "";
        for (const key in weatherIcons) {
          if (key === imageID) {
            weatherIcon = weatherIcons[key];
            if (key.endsWith("d")) {
              backgroundImage =
                "https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg";
            } else {
              backgroundImage =
                "https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg";
            }
          }
        }
        return backgroundImage;
      };
      
  return (
    <div className='weather-container' style={{backgroundImage: `url(${changeImage(country.weather[0].icon)})`, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
        <div className='temperature'><TbTemperatureCelsius onClick={() => {setTemperature(country.main.temp)}} className='temperature-type' /> / <TbTemperatureFahrenheit onClick={() => {setTemperature((country.main.temp * 9/5) + 32)}} className='temperature-type' /> </div>
        <h1>{country.name}</h1>
        <p>Current weather</p>
        <div className="weather-container-main">
            <img src={weatherIcon} alt="Weather" />
            <div className="temp">
                {(country.main.temp === temperature || temperature === 0) ? (
                    <>
                        <h2>{(country.main && country.main.temp) ? country.main.temp.toFixed(0) : 'Loading...'}</h2>
                        <RiCelsiusFill className='celsius' />
                    </>
                ) : (
                    <>
                        <h2>{(country.main && country.main.temp) ? temperature.toFixed(0) : 'Loading...'}</h2>
                        <TbTemperatureFahrenheit className='celsius' />
                    </>
                )}
                
            </div>
            <div className="weather-container-main-description">
                <h3>{country.weather[0].main}</h3> 
                <span>Feels like <b>{temperature.toFixed(0)}</b></span>
            </div>
        </div>
        <div className="weather-container-info">
            <div className="weather-container-info-container">
                <span>Wind</span>
                <b>{country.wind.speed} km/h</b>
            </div>
            <div className="weather-container-info-container">
                <span>Deg</span>
                <b>{country.wind.deg}</b>
            </div>
            <div className="weather-container-info-container">
                <span>Gust</span>
                <b>{country.wind.gust}</b>
            </div>
            <div className="weather-container-info-container">
                <span>Humidity</span> 
                <b>{country.main.humidity}%</b>
            </div>
            <div className="weather-container-info-container">
                <span>Visibility</span>
                <b>{country.visibility / 1000} km</b> 
            </div>
            <div className="weather-container-info-container">
                <span>Pressure</span>
                <b> {country.main.pressure} mb</b> 
            </div>
        </div>
    </div>
    );
}

export default SearchedWeather