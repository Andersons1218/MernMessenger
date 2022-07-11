import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WeatherDay from '../WeatherDay/WeatherDay'
import '../../index.css'



export default function PackageDetail({userPackage, addNewPackages, setCheckout}) {
// Passing the selected user package as state into packageAppend.
 const [packageAppend, setPackageAppend] = useState({})
 const [selectedPersons, setSelectedPersons] = useState({persons: 1})
 // weather api state
 const [weather, setWeather] = useState();


 function submitCheckout(event) {

     event.preventDefault();   
     addNewPackages({ ...userPackage, persons: selectedPersons.persons });
     setSelectedPersons({ persons: 1 });
   }


 function handlePersonsChange(event) {
  const newPersons = {
    // ...selectedPersons,
    [event.target.name]:
    Number(event.target.value)
  };
  setSelectedPersons(newPersons)
  // setPackageAppend({ ...userPackage, persons: event.target.value });
 }

 

//********* Weather Api Function ***********
   // Weather API constants
    const cityId = userPackage.weatherKey
    
    const accuKey= 'W8ADHjpBnjZel3Fv4rLBJAmMXzES46II'
    const requestURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${accuKey}`

const padNum = (num) => {

    const stringNum = num + '';
    const stringLength = stringNum.length;

    if (stringLength === 1) {
      return '0' + stringNum;
    } else {
      return stringNum
    }

}

    useEffect(() => {
        fetch(requestURL)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => setWeather(res.DailyForecasts.map(df => {
            return {
                min: df.Temperature.Minimum.Value,
                max: df.Temperature.Maximum.Value,
                weatherType: df.Day.IconPhrase,
                weatherIcon: padNum(df.Day.Icon),
                date: df.Date
            }
        })))       
    }, [cityId])



 // This is logic for testing checkout state!
 function checkoutTest(){
console.log(packageAppend)
  //  setCheckout(userPackage)
 }
 
 // This is logic to handle the setting of 'checkout' state.
 return (  
     <div className='grid grid-cols-2 justify-items-center font-display font-light '>
     {/* <button onClick={checkoutTest}>Testing checkout state</button> */}
     <div className=""> // div 1
        <h1 className='flex underline text-2xl '>Package Details:</h1><br/>
        <img className='rounded-lg drop-shadow-2xl my-2' src={userPackage.location_img} width="550px" />
        <h2 >{userPackage.location}</h2>
        <ul className='my-2'>
          <li >{userPackage.rating}</li>
          <li className='my-2'>{userPackage.hotel}</li>
          <li className='my-2'>{userPackage.flight}</li>
          <li className='my-2'>{userPackage.price}</li>
          <li className='my-2'>{userPackage.car}</li>

        </ul>
      </div>
      <div>
        <div>5 Day Forecast</div>
        <div className="py-4" >
          {!!weather && weather.map((i, index) => (
            <div key={index}>
              <WeatherDay
                min={i.min}
                max={i.max}
                weatherType={i.weatherType}
                weatherIcon={i.weatherIcon}
                date={i.date}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
      </div>
      <br />
      <div className="flex flex-col gallery rounded-lg">
        <h1>Gallery:</h1>
        <img className='rounded-lg' src={userPackage.hotel_img} width="550px" />
        <img className='rounded-lg' src={userPackage.flight_img} width="200px" height="100px" />
        <img className='rounded-lg' src={userPackage.car_img} width="550px" />
      </div>
      <div className="package-add" onSubmit={submitCheckout}>
        <form action="">
          <label>How many travelers?:</label>
          <div class="inline-block relative w-64">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="persons" value={selectedPersons.persons} onChange={handlePersonsChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Add Package</button>
        </form>
      </div>
    </div>
  );
}

