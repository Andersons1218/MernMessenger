import { useEffect, useState } from "react";
import WeatherDay from "../WeatherDay/WeatherDay";

export default function WeatherApi(){
const [weather, setWeather] = useState();


    const cityName = 'New York'
    const cityId = '349727'
    const apiKey = 'b40659a94b9b6c0b7564f0015feec506'
    const accuKey= 'QrCusMgrnbNg3fxxBA1s45QGZysaOiJM'
    const requestURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${accuKey}`

    useEffect(() => {
        fetch(requestURL)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => setWeather(res.DailyForecasts.map(df => {
            return {
                min: df.Temperature.Minimum.Value,
                max: df.Temperature.Maximum.Value,
                weatherType: df.Day.IconPhrase,
            }
        })))       
    }, [])

    useEffect(() => {
        console.log(weather)
    }, [weather])
   


    return(
        <div>
            {!!weather && weather.map((i, index) => (
                <div key={index}>
                    <WeatherDay min={i.min} max={i.max} weatherType={i.weatherType} />

                </div>
            ))}
        </div>
    )
}