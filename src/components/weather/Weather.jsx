import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Weather.scss"
//Weather Images
import {RiCelsiusFill} from "react-icons/ri"
import {TbTemperatureFahrenheit, TbTemperatureCelsius} from "react-icons/tb"
import {BiErrorAlt} from "react-icons/bi"
import Clear from "../../assets/clear.svg";
import Moon from "../../assets/Subtract.svg";
import Sunny from "../../assets/sunny.svg";
import Cloudy from "../../assets/Cloudy.svg";
import NightCloudy from "../../assets/NightCloudy.svg";
import Rainy from "../../assets/Rainy.svg";
import Thunder from "../../assets/Thunder.svg";
import RainyNight from "../../assets/RainyNight.svg";
import Wind from "../../assets/wind.png";


const Weather = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [weatherIcon, setWeatherIcon] = useState("https://openweathermap.org/img/wn/02d@2x.png");
  const [weatherBackground, setWeatherBackground] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getWeather() {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            setCountry(data);
            var iconMain = data.weather[0].icon;
            setWeatherIcon(iconMain)
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setCountry({})
        } finally {
            setLoading(false)
        }
    }
    getWeather();
  }, [id])
  
  switch (weatherIcon) {
    case "01d":
        setWeatherIcon(Clear)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "01n":
        setWeatherIcon(Moon)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    case "02d":
        setWeatherIcon(Sunny)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "02n":
        setWeatherIcon(NightCloudy)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    case "03d":
        setWeatherIcon(Cloudy)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "03n":
        setWeatherIcon(NightCloudy)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    case "04d":
        setWeatherIcon(Cloudy)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "04n":
        setWeatherIcon(NightCloudy)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    case "10d":
        setWeatherIcon(Rainy)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "10n":
        setWeatherIcon(RainyNight)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    case "11d":
        setWeatherIcon(Thunder)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "11n":
        setWeatherIcon(Thunder)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    case "50d":
        setWeatherIcon(Wind)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg")
        break;
    case "50n":
        setWeatherIcon(Wind)
        setWeatherBackground("https://images.wallpaperscraft.com/image/single/gradient_color_blue_155118_1600x900.jpg")
        break;
    default:
        break;
  }
  if (country.base && !loading) {
    return ( 
        <div className='weather-container' style={{backgroundImage: `url(${weatherBackground})`, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
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
  } else if (loading) {
    return (
    <div style={{height: "30vh", overflow: "hidden", position: "absolute", top: "50%", left: "50%",transform: "translate(-50%, -50%)"}} className="searchedMovies">
        <div className="loading" style={{marginTop: "30px"}}>
            <div></div><div></div><div></div>
        </div>
    </div>
    )
    
  }
   else {
    return (
        <div className="weather-container">
            <BiErrorAlt style={{color: "black", fontSize: "100px", position: "absolute", left: "350px", top: "30px"}}/>
            <h1 style={{color: 'black'}}>Not Found</h1>
            <p style={{color: "black", fontSize: "22px"}}>There is no such city</p>
        </div>
    )
  }
}

export default Weather;
