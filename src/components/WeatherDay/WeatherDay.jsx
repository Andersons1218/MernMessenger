export default function WeatherDay({ min, max, weatherType }) {
    return(
         <div>
            <div>Weather: {weatherType}</div>
            <div>Temp: {min} / {max}</div>
         </div>
    )
}