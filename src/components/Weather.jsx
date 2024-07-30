import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import searchIcon from '../assets/search.png';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import cloudyIcon from '../assets/cloudy.png';
import lightIcon from '../assets/lightrain.png';
import sunIcon from '../assets/sun.png';
import thunderIcon from '../assets/thunderstorm.png';
import snowIcon from '../assets/snow.png';
import nightIcon from '../assets/night.png';
import nightcoludIcon from '../assets/nightcloud.png';
import foogIcon from '../assets/foog.png';
import rainIcon from '../assets/rain.png';

const Weather = () => {

    const inputRef = useRef();
   
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": sunIcon,
        "01n": nightIcon,
        "02d": cloudyIcon,
        "02n": nightcoludIcon,
        "03d": cloudyIcon,
        "03n": nightcoludIcon,
        "04d": cloudyIcon,
        "04n": nightcoludIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "11d": thunderIcon,
        "11n": thunderIcon,
        "13d": snowIcon,
        "13n": snowIcon,
        "50d": foogIcon,
        "50n": foogIcon,   
    }

    const search = async (city) => {
        if(city===''){
            return alert("Please enter a city name");
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            
            if(!response.ok){
                alert(data.message);
                return;
            }

            console.log(data);
            const icon = allIcons[data.weather[0].icon] || sunIcon;
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                city: data.name,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                icon: icon
            });
        } catch (error) {
            setWeatherData(false);
            console.error("Error fetching weather data");
        }
    }

    useEffect(() => {
        search('london');
    }, []);

    return (
        <div className='weather'>
            <div className='search-bar'>
                <input ref = {inputRef} type='text' placeholder='Search...' />
                <img src = {searchIcon} alt='' onClick={()=>search(inputRef.current.value)}/>
            </div>  
            {weatherData?<><img src= {weatherData.icon} alt='icons' className = 'weather-icon' />
            <p className = 'temperature'>{weatherData.temperature}°C</p>
            <p className = 'location'>{weatherData.city}</p>
            <div className = 'weather-data'>
                <div className="col">
                    <img src = {humidityIcon} alt='humidity icon' />
                    <div>
                        <p>{weatherData.humidity}</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src = {windIcon} alt='wind' />
                    <div>
                        <p>{weatherData.wind} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div></>:<></>}  
            
        </div>
    );
    }

export default Weather;