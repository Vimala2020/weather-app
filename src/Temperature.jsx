import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Temperature() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [isDay, setIsDay] = useState(true); // Default to day

    useEffect(() => {
        if (weatherData) {
            // Check if it is day or night based on sunrise and sunset times
            const sunriseTime = new Date(weatherData.sys.sunrise * 1000); // Convert Unix timestamp to milliseconds
            const sunsetTime = new Date(weatherData.sys.sunset * 1000); // Convert Unix timestamp to milliseconds
            const currentTime = new Date();

            setIsDay(currentTime > sunriseTime && currentTime < sunsetTime);
        }
    }, [weatherData]);

    const handleWeather = () => {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30527a5348da6170bea55ba7e52edb00`;
        axios.get(apiURL)
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <div className='flex justify-between'>
                <input
                    className='bg-slate-600 border rounded-md border-slate-500 text-slate-200 placeholder-slate-400  h-12 p-2 focus:outline-none'
                    value={city}
                    type='text'
                    placeholder='Enter your City'
                    onChange={handleCityChange}
                />
                </div>

                <div className='flex flex-col items-center justify-center'></div>

                <button className='bg-slate-400 mt-3  flex justify-center text-slate-100 p-2 rounded-md hover:bg-slate-700 focus:outline-none' onClick={handleWeather}>Get Weather</button>
            
            <div className=' flex justify-center mt-8'>
                {isDay ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12   mt-1 text-yellow-300 text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12  mt-1 text-slate-200 text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                )}
            </div>

            <div className='flex justify-center text-slate-50 text-xl mt-6 font-semibold text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out  justify-center'>
                {weatherData && (
                    <>
                        <p>{weatherData.main.temp}&#x2109;</p>
                    </>
                )}
            </div>
            <div className='flex justify-center text-slate-300 text-l mt-6 text-transform scale-100 hover:scale-125 transition-transform duration-300 ease-in-out '>
                {weatherData && (
                    <>
                        <p>{weatherData.weather[0].description}</p>
                    </>
                )}
            </div>
        </div>

            
       
    )
}

export default Temperature;
