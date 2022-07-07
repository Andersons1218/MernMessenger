import { Link } from 'react-router-dom'



export default function PackageListItem({pkg}) {

  return (

      <>
    <Link to={`/packages/${pkg._id}`} className='pkgLink'>
    <div style={{'background': `url(${pkg.location_img}) no-repeat center center`, 'WebkitBackgroundSize': '200px'}} className='pkgBox'>
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