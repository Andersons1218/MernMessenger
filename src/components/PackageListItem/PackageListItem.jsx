import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function PackageListItem({pkg, setUserPackage}) {

  
  const [pkgState, setPkgState] = useState(null)

  
  function setNewPkgState(event) {
  setUserPackage(pkg)
}


  return (

    
    <>
    {/* <Link to={`/packages/${pkg._id}`} className='pkgLink' onClick={setPkgState}> */}
    <div style={{'background': `url(${pkg.location_img}) no-repeat center center`, 'WebkitBackgroundSize': '200px'}} onClick={setNewPkgState} className='pkgBox'>
     <h1>{pkg.location}</h1>
     <h2>{pkg.hotel}</h2>
     <h3>{pkg.rating}</h3>
     </div>
     {/* </Link> */}
     </>
    );
  }