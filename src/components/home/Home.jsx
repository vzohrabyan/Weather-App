import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONFIG } from "../../config"
import Countires from './countries/Countires';
import "./Home.scss"

const Home = () => {
  const [countries, setCountries] =  useState([])

  useEffect(() => {
    async function getWeather() {
        try {
            const yerevanData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=yerevan&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const parisData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const londonData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const seoulData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const moscowData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const berlinData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const romeData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=rome&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            const washingtonData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=washington&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);

            setCountries([
              yerevanData.data,
              parisData.data,
              londonData.data,
              seoulData.data,
              moscowData.data,
              berlinData.data,
              romeData.data,
              washingtonData.data,
            ])
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setCountries([])
        }
    }
    getWeather();
  }, [])
  return (
    <div className='home'>
    <ul>
      {CONFIG.first.map((country, id) => {
        return (
          <Link  key={id} to={`/weather/${country}`}><li>{country}</li></Link>
        )
      })}
    </ul>
    <ul>
    {CONFIG.second.map((country, id) => {
        return (
          <Link key={id} to={`/weather/${country}`}><li>{country}</li></Link>
        )
      })}
    </ul>
    <div className='defaulte'>
      {countries.length !== 0 && <Countires countries={countries} />}
    </div>
    </div>
   
  )
}

export default Home