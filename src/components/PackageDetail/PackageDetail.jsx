import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function PackageDetail({packages}) {


 const [selectedPackage, setSelectedPackage] = useState('')

 let { packageId } = useParams()

// let selectedPPackage = packages.find(pkg => pkg._id === packageId)

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
     <h2></h2>
    </> 
    );
}