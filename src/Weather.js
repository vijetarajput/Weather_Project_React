import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props)
{
    const [city,setCity]=useState(props.defaultCity);
    const [weather,setWeather]=useState({ready:false});

    function handelResponse(response)
    {
        console.log(response.data);
        setWeather(
            {
                city: response.data.name,
                temperature: response.data.main.temp,
                date: new Date(response.data.dt*1000),
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                // `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                percipitation: "15",
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                ready:true,
                lon: response.data.coord.lon,
                lat: response.data.coord.lat,
            }
        );
    }
    function handelSearch(event)
    {
        event.preventDefault();
        setCity(event.target.value);
    }
    function searchCity()
    {
        const apikey = "1fcc2d0a4fe13ef146f577fd4bccbad4";
        let myCity = `${city}`;
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(handelResponse);
    }
    function onSearchEvent(event)
    {
        event.preventDefault();
        if(city)
        {        
        searchCity();
        }
        else
        {
            alert("Please enter city name");
        }
    }
    if(weather.ready)
    {
    return(
       <div className="weather mt-5 border p-2 rounded">
            <form className="mt-3 ms-3" onSubmit={onSearchEvent}>
                <input className="form-input" type="search" placeholder="Enter city name..." autoFocus="on" onChange={handelSearch}/>
                <input type="submit" value="Submit" className="btn btn-primary ms-2"/>
            </form>
            <WeatherData weather={weather}/>
            <WeatherForecast weather={weather}/>
       </div>
    );
    }
    else
    {
        searchCity();
        return("Loading...");
    }    
}