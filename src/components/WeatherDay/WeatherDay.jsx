export default function WeatherDay({ min, max, weatherType, weatherIcon }) {
    return(
         <div>
            <div>Weather: {weatherType}</div>
            <div>
                <img 
                    alt={weatherType}
                    src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}/>
            </div>
            <div>Temp: {min} / {max}</div>
         </div>
    )
}