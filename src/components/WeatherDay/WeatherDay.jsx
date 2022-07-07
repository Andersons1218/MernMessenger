

export default function WeatherDay({ min, max, weatherType, weatherIcon, date }) {
    return(
         <div>
            <div>{weatherType}</div>
            <div>
                <img 
                    alt={weatherType}
                    src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}/>
            </div>
            <div>Temp: Min: {min} / Max: {max}</div>
         </div>
    )
}