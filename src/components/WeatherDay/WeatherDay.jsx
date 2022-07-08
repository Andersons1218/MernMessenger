import '../../index.css'

export default function WeatherDay({ min, max, weatherType, weatherIcon, date }) {
    return(
          <div className='shadow-md border border-slate-200 py-2 px-2 mt-2'>
            <div>{weatherType}</div>
            <div className='grid justify-items-center'>
                <img 
                    alt={weatherType}
                    src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}/>
            </div>
            <div>Temp: Min: {min} / Max: {max}</div>
         </div>
        
   
    )
}