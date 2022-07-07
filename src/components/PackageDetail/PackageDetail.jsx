import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function PackageDetail({userPackage}) {



 const [selectedPackage, setSelectedPackage] = useState('')


 console.log(userPackage)
 
//  let { packageId } = useParams()
 

//  let sltPackage = packages.find(pkg => pkg.id === packageId)
//  console.log(sltPackage)
// console.log(packages)
 // packages.filter((pkg) => pkg._id === packageId)
 
 // console.log(packageId)
 //  function whichPackage() {
   //  setSelectedPackage(packageId)
   //  console.log(selectedPackage), []
   //  }
   //  whichPackage()
   // let selectedPPackage = packages.packageId
   
   return (  
     <>
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
      <div className="package-add">
        <form action="">
          <label>For How Many People?:</label>
          
        </form>
      </div>
    </> 
    );
}