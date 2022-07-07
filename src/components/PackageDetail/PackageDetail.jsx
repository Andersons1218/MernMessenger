import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WeatherDay from '../WeatherDay/WeatherDay'

// import WeatherApi from '../../components/WeatherApi/WeatherApi'


export default function PackageDetail({userPackage, addNewPackages, setCheckout}) {


// Passing the selected user package as state into packageAppend.
 const [packageAppend, setPackageAppend] = useState({})
 const [selectedPersons, setSelectedPersons] = useState([])
 // weather api state
 const [weather, setWeather] = useState();


 function submitCheckout(event) {

   event.preventDefault();
   setPackageAppend({ ...userPackage, persons: selectedPersons.persons });
   //  console.log(packageAppend)
   addNewPackages(packageAppend);
   setSelectedPersons({ persons: 1 });
 }

 function handlePersonsChange(event) {
  const newPersons = {
    ...selectedPersons,
    [event.target.name]:
    event.target.value
  };
  setSelectedPersons(newPersons)
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
     <>
     <button onClick={checkoutTest}>Testing checkout state</button>
     <h1>Package Details:</h1><br/>
      <img src={userPackage.location_img} />
     <h2>{userPackage.location}</h2>
     <div>
        <div>
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
     <ul>
      <li>{userPackage.rating}</li>
      <li>{userPackage.hotel}</li>
      <li>{userPackage.flight}</li>
      <li>{userPackage.price}</li>
      <li>{userPackage.car}</li>
     </ul><br />
      <div className="gallery">
      <h1>Gallery:</h1>
      <img src={userPackage.hotel_img} />
      <img src={userPackage.flight_img} />
      <img src={userPackage.car_img} />
      </div>
      <div className="package-add" onSubmit={submitCheckout}>
        <form action="">
          <label>For How Many People?:</label>
        <select name="persons" value={selectedPersons.persons} onChange={handlePersonsChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">Add Package</button>
        </form>
      </div>
    </> 
    );
}