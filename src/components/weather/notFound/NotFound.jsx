import React from 'react'
import { BiErrorAlt } from 'react-icons/bi'

const NotFound = () => {
    return (
        <div className="weather-container">
            <BiErrorAlt style={{color: "black", fontSize: "100px", position: "absolute", left: "350px", top: "30px"}}/>
            <h1 style={{color: 'black'}}>Not Found</h1>
            <p style={{color: "black", fontSize: "22px"}}>There is no such city</p>
        </div>
    )
}

export default NotFound