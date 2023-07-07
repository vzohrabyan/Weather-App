import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
console.log(countries);
  return (
    <div className='home'>
    <ul>
      <Link to={"/weather/yerevan"}><li>Yerevan</li></Link>
      <Link to={"/weather/new york"}><li>New York</li></Link>
      <Link to={"/weather/london"}><li>London</li></Link>
      <Link to={"/weather/moscow"}><li>Moscow</li></Link>
      <Link to={"/weather/tbilisi"}><li>Tbilisi</li></Link>
      <Link to={"/weather/berlin"}><li>Berlin</li></Link>
      <Link to={"/weather/paris"}><li>Paris</li></Link>
      <Link to={"/weather/rome"}><li>Rome</li></Link>
      <Link to={"/weather/washington"}><li>Washington</li></Link>
      <Link to={"/weather/vienna"}><li>Vienna</li></Link>
      <Link to={"/weather/minsk"}><li>Misk</li></Link>
      <Link to={"/weather/sofia"}><li>Sofia</li></Link>
      <Link to={"/weather/zagreb"}><li>Zagreb</li></Link>
      <Link to={"/weather/athens"}><li>Athens</li></Link>
      <Link to={"/weather/new delhi"}><li>New Delhi</li></Link>
      <Link to={"/weather/tehran"}><li>Tehran</li></Link>
      <Link to={"/weather/astana"}><li>Astana</li></Link>
    </ul>
    <ul>
      <Link to={"/weather/kabul"}><li>Kabul</li></Link>
      <Link to={"/weather/tirana"}><li>Tirana</li></Link>
      <Link to={"/weather/luanda"}><li>Luanda</li></Link>
      <Link to={"/weather/brussels"}><li>Brussels</li></Link>
      <Link to={"/weather/gyumri"}><li>Gyumri</li></Link>
      <Link to={"/weather/tashkent"}><li>Tashkent</li></Link>
      <Link to={"/weather/ashgabat"}><li>Ashgabat</li></Link>
      <Link to={"/weather/bern"}><li>Bern</li></Link>
      <Link to={"/weather/stockholm"}><li>Stockholm</li></Link>
      <Link to={"/weather/damascus"}><li>Damascus</li></Link>
      <Link to={"/weather/madrid"}><li>Madrid</li></Link>
      <Link to={"/weather/seoul"}><li>Seoul</li></Link>
      <Link to={"/weather/bratislava"}><li>Bratislava</li></Link>
      <Link to={"/weather/belgrade"}><li>Belgrade</li></Link>
      <Link to={"/weather/riyadh"}><li>Riyadh</li></Link>
      <Link to={"/weather/lisbon"}><li>Lisbon</li></Link>
      <Link to={"/weather/warsaw"}><li>Warsaw</li></Link>
    </ul>
    <div className='defaulte'>
      {countries.length !== 0 && <Countires countries={countries} />}
    </div>
    </div>
   
  )
}

export default Home