import React from 'react';
import './Weather.css';
import searchIcon from '../assets/search.png';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import cloudyIcon from '../assets/cloudy.png';
import lightIcon from '../assets/lightrain.png';
import sunIcon from '../assets/sun.png';
import thunderIcon from '../assets/thunderstorm.png';
import snowIcon from '../assets/snow.png';

const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' />
                <img src = {searchIcon} alt='search icon' />
            </div>    
            <img src= {sunIcon} alt='sun icon' className = 'weather-icon' />
            <p className = 'temperature'>16°C</p>
            <p className = 'location'>London</p>
            <div className = 'weather-data'>
                <div className="col">
                    <img src = {humidityIcon} alt='humidity icon' />
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src = {windIcon} alt='wind' />
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Weather;