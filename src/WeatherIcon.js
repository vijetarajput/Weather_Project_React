import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props)
{
    const codemapping = {
        "01d":"CLEAR_DAY",
        "01n":"CLEAR_NIGHT",
        "02d":"PARTLY_CLOUDY_DAY",
        "02n":"PARTLY_CLOUDY_NIGHT",
        "03d":"PARTLY_CLOUDY_DAY",
        "03n":"PARTLY_CLOUDY_NIGHT",
        "04d":"CLOUDY",
        "04n":"CLOUDY",
        "09d":"RAIN",
        "09n":"RAIN",
        "10d":"SLEET",
        "10n":"SLEET",
        "11d":"SNOW",
        "11n":"SNOW",
        "13d":"WIND",
        "13n":"WIND",
        "50d":"FOG",
        "50n":"FOG"      
    }
    return(
        <div className="weatherIcon">
        <ReactAnimatedWeather
                icon={codemapping[props.icon]}
                color="black"
                size={props.size}
                animate={true}
            />
        </div>
        );
}        // <div className="weatherIcon">
        //     <img className="icon_img" src="https://cdn.jsdelivr.net/gh/divyanshu013/react-animated-weather@4b337a77c88d52e45e936dcfdef10a453fbedada/react-animated-weather.gif" alt={props.alt}/>
        // </div>