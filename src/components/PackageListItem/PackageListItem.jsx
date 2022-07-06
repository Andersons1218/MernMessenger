import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'



export default function PackageListItem({pkg}) {

  
  const [pkgState, setPkgState] = useState(null)
  let { packageId } = useParams()
  
  function setNewPkgState() {
  let sltPackage = pkg.find(pkgs => pkgs.id === packageId)
  setPkgState(sltPackage)
  console.log(pkgState)
}


  return (

      <>
    <Link to={`/packages/${pkg._id}`} className='pkgLink' onClick={setPkgState}>
    <div style={{'background': `url(${pkg.locaiton_img}) no-repeat center center`, 'WebkitBackgroundSize': '200px'}} className='pkgBox'>
    <div className='pkgDetails'> 
     <h1>{pkg.location}</h1>
     <h2>{pkg.hotel}</h2>
     <h3>{pkg.rating}</h3>
     </div>
     </div>
     </Link>
     </>
    );
  }