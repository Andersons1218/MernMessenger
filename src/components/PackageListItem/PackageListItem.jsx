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
    <div className='hover:bg-gradient-to-r from-blue-500 to-transparent cursor-pointer'>
    <div style={{'background': `url(${pkg.location_img}) no-repeat center center`, 'WebkitBackgroundSize': '200px', width: "200px", height: '50px'}} onClick={setNewPkgState} className='pkgBox'>
   </div>
     <h1 class="font-sans md:text-center hover:uppercase">{pkg.location} <br></br> Starting:${pkg.price} </h1>
     
      </div>

     </>
    );
  }