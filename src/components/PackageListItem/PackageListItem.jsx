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
    <div>
    <div className='hover:scale-125 shadow-md border border-slate-200 py-2 ml-8 pkgBox' 
          style={{'background': `url(${pkg.location_img}) no-repeat center center`, 'WebkitBackgroundSize': '200px', width: "200px", height: '100px'}} 
          onClick={setNewPkgState}>
     
     <h1 class="font-sans md:text-center">{pkg.location}</h1>
    </div>
    
    </div>
   
     </>
    );
  }