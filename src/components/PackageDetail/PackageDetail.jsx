import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function PackageDetail({packages}) {

 const [selectedPackage, setSelectedPackage] = useState(null)

 
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
     <h1>Package Details:</h1>
     <h2>{packages.location}</h2>
    </> 
    );
}