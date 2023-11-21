import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props)
{
    const [city,setCity]=useState();
    const [weather,setWeather]=useState({ready:false});

    function handelResponse(response)
    {
        console.log(response.data);
        setWeather(
            {
                city: response.data.name,
                temperature: response.data.main.temp,
                date: response.data.coord.dt,
                description: response.data.weather[0].description,
                iconUrl:`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
                percipitation: "15",
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                ready:true
            }
        );
    }
    function handelSearch(event)
    {
        event.preventDefault();
        setCity(event.target.value);
    }
    function onSearchEvent(event)
    {
        event.preventDefault();
        const apikey = "1fcc2d0a4fe13ef146f577fd4bccbad4";
        let myCity = `${city}`;
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(handelResponse);
    }
    if(weather.ready)
    {
    return(
       <div className="weather mt-5 border p-2 rounded">
        <form className="mt-3 ms-3" onSubmit={onSearchEvent}>
            <input className="form-input" type="search" placeholder="Enter city name..." autoFocus="on" onChange={handelSearch}/>
            <input type="submit" value="Submit" className="btn btn-primary ms-2"/>
        </form>
            <h1 className="ms-3">{weather.city}</h1>
            <ul>
                <li>{weather.date}</li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row p-3">
                <div className="col-6">
                    <img src={weather.iconUrl} alt="weather icon"/>
                    <h2>{Math.round(weather.temperature)}°</h2><div className="celcius">C</div>
                </div>
            <div className="col-6">
                <ul>
                    <li>Percipitation: {weather.percipitation}%</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind} km/h</li>
                </ul>
            </div>
        </div>
       </div>
    );
    }
    else
    {
        const apikey = "1fcc2d0a4fe13ef146f577fd4bccbad4";
        let city = props.defaultCity;
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(handelResponse);
        return("Loading...");
    }    
}