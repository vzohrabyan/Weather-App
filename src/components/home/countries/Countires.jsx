import React from 'react'
import { RiCelsiusFill } from 'react-icons/ri'

const Countires = ({countries}) => {
    return (
        <>
            {countries.map(({name, weather, main}, id) => {
                return(<div key={id} className="defaulte-weather" style={{backgroundImage: `url(https://images.wallpaperscraft.com/image/single/sky_blue_color_176240_1600x900.jpg)`, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                <h1>{name}</h1>
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather" />
                <div className="temp">
                    <h2>{(main && main.temp) ? main.temp.toFixed(0) : 'Loading...'}</h2>
                    <RiCelsiusFill className='celsius' style={{fontSize: "35px"}}/>
                </div>
                </div>) 
                })}
        </>
    )
    
}

export default Countires