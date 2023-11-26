import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
// import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props)
{
    const [loaded,setLoaded]=useState(false);
    const [forecast, setForecast]=useState({});
    
    useEffect(()=>
    {
       setLoaded(false); 
    },[props.weather])

    function displayForecast(response)
    {
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if(loaded)
    {
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast,index)
                    {
                        return(
                        <div className="col" key={index}>
                            <ForecastDay forecast={dailyForecast}/>
                        </div>);
                    }
                    )}
                </div>
            </div>
            );
    }
    else
    {
        let apikey=`03ob4taaa6f366304d608c02ae4ad453`;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${props.weather.lon}&lat=${props.weather.lat}&key=${apikey}`;
        axios.get(apiUrl).then(displayForecast);
        return("Loading forecast...");
    }
}