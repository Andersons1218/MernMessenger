import { useParams } from 'react-router-dom'
import PackageListItem from '../PackageListItem/PackageListItem';

export default function PackageDetail() {
  
let { packageId } = useParams()

  let selectedPackage = Package.find(pkg => pkg.location === movieId)
  
  return (  
    <>
     <h1>Package Details:</h1>
     <h2>{selectedPackage.location}</h2>
    </> 
    );
}