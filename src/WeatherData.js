import "./Weather.css";
import FormateDate from "./FormateDate";

export default function WeatherData(props)
{
    return(
        <div>
       
            <h1 className="ms-3">{props.weather.city}</h1>
            <ul>
                <li className="weather_day"><FormateDate date={props.weather.date}/></li>
                <li className="text-capitalize">{props.weather.description}</li>
            </ul>
            <div className="row p-3">
                <div className="col-6">
                    <img src={props.weather.iconUrl} alt="weather icon"/>
                    <h2>{Math.round(props.weather.temperature)}°</h2><div className="celcius">C</div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Percipitation: {props.weather.percipitation}%</li>
                        <li>Humidity: {props.weather.humidity}%</li>
                        <li>Wind: {props.weather.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );    
}