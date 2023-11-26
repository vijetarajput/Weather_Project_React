import React from "react";
import "./WeatherForecast.css";

export default function ForecastDay(props)
{
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let day = (new Date(props.forecast.time*1000)).getDay();
    let imgSrc=`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.forecast.condition.icon}.png`;
    
    return(
        <>
             <div className="Weatherforecast-day">{days[day]}</div>
                            {/* <WeatherIcon icon="{forecast[0].condition.icon}" size={30}/> */}
            <img className="WeatherForecast-img" alt="icon" src={imgSrc}/>
            <div className="Weatherforecast-temp">
                <span className="Forecast-temp-max">{Math.round(props.forecast.temperature.maximum)}°</span>
                <span className="Forecast-temp-min">{Math.round(props.forecast.temperature.minimum)}°</span>
            </div>
            
        </>
    );
}