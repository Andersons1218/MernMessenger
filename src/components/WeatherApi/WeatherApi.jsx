import { useEffect, useState } from "react";
import WeatherDay from "../WeatherDay/WeatherDay";

export default function WeatherApi(){
// const [weather, setWeather] = useState();


//     // const cityName = 'Cairo'
//     const cityId = '1123655'
    
//     const accuKey= 'W8ADHjpBnjZel3Fv4rLBJAmMXzES46II'
//     const requestURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${accuKey}`

// const padNum = (num) => {
//     const stringNum = num + '';
//     const stringLength = stringNum.length;

//     if (stringLength === 1) {
//         return '0' + stringNum;
//     } else {
//         return stringNum
//     }
// }

//     useEffect(() => {
//         fetch(requestURL)
//         .then(res => res.json())
//         // .then(res => console.log(res))
//         .then(res => setWeather(res.DailyForecasts.map(df => {
//             return {
//                 min: df.Temperature.Minimum.Value,
//                 max: df.Temperature.Maximum.Value,
//                 weatherType: df.Day.IconPhrase,
//                 weatherIcon: padNum(df.Day.Icon),
//             }
//         })))       
//     }, [])




//     return(
//         <div>
//             {!!weather && weather.map((i, index) => (
//                 <div key={index}>
//                     <WeatherDay
//                         min={i.min}
//                         max={i.max}
//                         weatherType={i.weatherType}
//                         weatherIcon={i.weatherIcon} 
//                     />

//                 </div>
//             ))}
//         </div>
//     )
}