import '../index.css'
import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'

export default function NavBar({ user, setUser }) {
 // Add the following function
 function handleLogOut() {
  // Delegate to the users-service
  userService.logOut()
  // Update state will also cause a re-render
  setUser(null)
}
    return(
        <div className='flex mb-8 box-border h-16 w-auto bg-amber-400 font-display font-light'>
            <nav className='text-xl py-4 flex '>
                <h1 className='ml-4 mr-80'>Mern Travel Co.</h1>
                <Link to="/packages" className=' flex hover:text-2xl ml-48 text-center'>Booking</Link>
                &nbsp; | &nbsp;
                <Link to="/checkout" className='hover:text-2xl' >Check out</Link>
                &nbsp; | &nbsp;
                Welcome, { user.name }
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut} className='hover:text-2xl'>Log out</Link>
                </nav>
        </div>
    )
}