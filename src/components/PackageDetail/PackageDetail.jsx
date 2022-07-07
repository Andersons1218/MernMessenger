import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function PackageDetail({userPackage, addNewPackages, setCheckout}) {

// Passing the selected user package as state into packageAppend.
 const [packageAppend, setPackageAppend] = useState([userPackage])
 const [selectedPersons, setSelectedPersons] = useState([])

 function submitCheckout(event) {
 event.preventDefault();
  const personsAppend = {
    ...packageAppend,
    selectedPersons
  }
  console.log(personsAppend)
  // addNewPackages(personsAppend)
  // setSelectedPersons({ persons: 1 })
 }

 function handlePersonsChange(event) {
  const newPersons = {
    ...selectedPersons,
    [event.target.name]:
    event.target.value
  };
  setSelectedPersons(newPersons)
 }




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