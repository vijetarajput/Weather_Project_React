import React from "react";
import "./Weather.css";
import { useState } from "react";

export default function WeatherTemperature(props)
{
    const [unit, setUnit]=useState("celsius");
    function showCelsius(event)
    {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event)
    {
        event.preventDefault();
        setUnit("fahrenheit");        
    }

    function fahrenheit()
    {
        return (props.celsius*9/5)+32;
    }
    if(unit==="celsius")
    {
        return(
            <>
            <h2>{Math.round(props.celsius)}°</h2>
            <div className="celsius">
                <a href="/" onClick={showCelsius}>C</a>
            </div>
            <div className="celsius"> | </div>
            <div className="celsius">
                <a href="/" onClick={showFahrenheit}>F</a>
            </div>
            </>
        );
    }
    else
    {
        return(
            <>
            <h2>{Math.round(fahrenheit())}°</h2><div className="celsius"><a href="/" onClick={showCelsius}>C</a></div>
            <div className="celsius"> | </div>
            <div className="celsius"><a href="/" onClick={showFahrenheit}>F</a></div>
            </>
        );
    }
}