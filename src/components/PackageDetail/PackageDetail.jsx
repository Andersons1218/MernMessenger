import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function PackageDetail({packages}) {

//console.log(packages[1].car)
 const [selectedPackage, setSelectedPackage] = useState('')


 let { packageId } = useParams()
 console.log(packageId)
  let sltPackage = packages.findOneById(pkg => pkg.id === packageId)
  console.log(sltPackage)
console.log(packages)
 packages.filter((pkg) => pkg._id === packageId)
 
 console.log(packageId)
  function whichPackage() {
    setSelectedPackage(packageId)
    console.log(selectedPackage), []
    }
    whichPackage()
   let selectedPPackage = packages.packageId
   
   return (  
    <>
     <h1>Package Details:</h1>
     <h2></h2>
    </> 
    );
}