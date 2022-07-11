import { useParams } from 'react-router-dom'
import { useState, useEffect, } from 'react'

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
     alert("Your Package was added to cart")
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
     <div className='grid grid-cols-2 justify-items-center font-display font-light mr-20 ml-20'>
     {/* <button onClick={checkoutTest}>Testing checkout state</button> */}
     <div className="">
        <h1 className='flex underline text-2xl '>Package Details:</h1><br/>
        <img className='rounded-lg drop-shadow-2xl my-2' src={userPackage.location_img} width="550px" />
        <h1 className='flex mt-6 underline text-2xl'>This package includes a trip to...</h1>
        <h2 className='my-6 uppercase text text-4xl'>{userPackage.location}</h2>
        <ul className='my-2'>
          <li className='flex mt-6 underline text-2xl'>Stay</li>
          <li className='flex text-2xl my-2'>{userPackage.hotel} {userPackage.rating}</li>
          <li className='flex text-left'>{userPackage.description}</li>
        </ul>
        <div className='mt-16'>
          <div className='flex underline text-2xl'>Transportation</div>
          <div className='flex my-6 uppercase text text-lg'>Airline: {userPackage.flight}</div>
          <div className='flex my-6 uppercase text text-lg'>Rental: {userPackage.car}</div>
        </div> 
        <div className='my-2 box-border h-16 w-auto bg-amber-400 text-2xl'>Total Price {userPackage.price}
        <div className=''>Book Now!</div>
        </div>
        
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
    
     <div></div>
     <div className="package-add mt-4 text-lg px-2" onSubmit={submitCheckout}>
        <form action="">
          <label className='px-2 '>Select How Many People:</label>
        <select name="persons" className='px-8 mr-4 bg-slate-300 ring-1 ring-slate-800' value={selectedPersons.persons} onChange={handlePersonsChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button className='px-4 ring-offset-2 ring-2 hover:ring-4 rounded-md ring-blue-500' type="submit">Add Package</button>
        </form>
 

      </div>
      <div></div>
     <div className='grid grid-cols-3 content-start mt-36 underline text-2xl space-x-4 '>Gallery:
      <div></div>
      <div></div>
      <div><img className='rounded-lg justify-self-' src={userPackage.hotel_img} width="550px"/></div>
      <div><img className='rounded-lg' src={userPackage.car_img} width="550px" /></div>
      <div><img className='rounded-lg' src={userPackage.flight_img} width="350px" /></div>

      
      
      
      </div>
      
    </div> 
    );
}