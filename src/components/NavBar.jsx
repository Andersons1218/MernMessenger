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
        <div className='mb-8 box-border h-16 w-auto bg-amber-400 font-display font-light'>
            <nav className='text-xl py-4'>
                <Link to="/packages">Booking</Link>
                &nbsp; | &nbsp;
                <Link to="/checkout">Check out</Link>
                &nbsp; | &nbsp;
                Welcome, { user.name }
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log out</Link>
                </nav>
        </div>
    )
}