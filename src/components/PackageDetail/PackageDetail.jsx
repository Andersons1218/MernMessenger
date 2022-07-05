import { useParams } from 'react-router-dom'
import PackageListItem from '../PackageListItem/PackageListItem';


export default function PackageDetail({Packages}) {
    
  let { packageId } = useParams()

  let selectedPackage = Packages.find(pkg => pkg.location === packageId)

  return (
      <>
      <PackageListItem Package={selectedPackage}/>

     <h1>Package Details:</h1>
     <h2>{selectedPackage.location}</h2>
     <p>Hotel: {selectedPackage.hotel}<br/>
     Rating: {selectedPackage.rating}<br/>
     Flight: {selectedPackage.flight}<br/>
     Price: {selectedPackage.price}<br/>
     Car: {selectedPackage.car}<br/>
     </p>
     </>
    );
  }