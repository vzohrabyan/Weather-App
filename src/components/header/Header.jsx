import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FiSearch} from "react-icons/fi"
import './Header.scss'
import WeatherLogo from "../../assets/weather-forecast.png"
const Header = () => {
  const [value, setValue] = useState("");
  return (
    <header>
      <Link to={"/"}><img src={WeatherLogo} alt="Logo" /></Link>
        <Link to={"/"}>Home</Link>
        <form>
            <input 
                type="text"
                placeholder='Search for location'
                value={value}
                onChange={(event) => {setValue(event.target.value)}}
                />
                <Link to={`/weather/${value}`}>
                    <FiSearch style={{color: "black", position: "absolute", right: "30px",top: "7px", fontSize: "22px"}}/>
                </Link>
        </form>
    </header>
  )
}

export default Header