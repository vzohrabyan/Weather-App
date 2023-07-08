import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Weather.scss";
import Loading from './loading/Loading';
import NotFound from './notFound/NotFound';
import SearchedWeather from './searchedWeather/SearchedWeather';



const Weather = () => {
    
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getWeather() {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`);
            setCountry(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setCountry({})
        } finally {
            setLoading(false)
        }
    }
    getWeather();
  }, [id])
  
  return ( 
    <>
        {loading && <Loading />}
        {!country.base && !loading && <NotFound />}
        {country.base && !loading && <SearchedWeather country={country} />}
    </>
  )
}

export default Weather;
