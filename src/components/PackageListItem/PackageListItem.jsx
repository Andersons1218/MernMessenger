import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function PackageListItem({pkg, setUserPackage}) {

  
  const [pkgState, setPkgState] = useState(null)

  
  function setNewPkgState(event) {
  setUserPackage(pkg)
}


  return (

    
    <>
    <br></br>
    <div class='hover:' style={{'background': `url(${pkg.location_img}) no-repeat center center`, 'WebkitBackgroundSize': '200px', width: "200px", height: '50px'}} onClick={setNewPkgState} className='pkgBox'>
     <h1 class="font-sans md:text-center hover:uppercase">{pkg.location}</h1>
    
     </div>
     </>
    );
  }