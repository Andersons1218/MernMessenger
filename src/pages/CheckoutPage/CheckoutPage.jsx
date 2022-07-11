import CheckoutList from '../../components/Checkout/CheckoutList'
import CheckoutTotal from '../../components/Checkout/CheckoutTotal'
import * as userService from '../../utilities/users-service'
import * as packagesAPI from '../../utilities/packages-api'
import '../../index.css'

export default function CheckoutPage({checkout, setCheckout, user}) {

    function showCheckout() {
        checkout.map((item) => {
          return console.log(`Here are the Packages you ordered: ${item._id}.`)
        })
    }

    async function handleCheckToken(){
       const expDate = await userService.checkToken()
        console.log(expDate)
       
    }

    function addPackageToProfile() {
        packagesAPI.addToProfile({checkout: checkout, profileid: user.profile})
        alert("Congrats! Your Order Was Purchased")
       }

    return(
        <div className='font-light'>
            <div><h1 className='mb-8 text-6xl' >Review Your Order</h1></div>
            <div className='grid grid-cols-2'>
            <div className='flex space-y-20'>
            <div className='mr-40 space-y-6'>
                <CheckoutList checkout={checkout} setCheckout={setCheckout} />
            </div>
            <div className=''>
                <CheckoutTotal checkout={checkout} addToProf={addPackageToProfile} />
            </div>
            </div>
           
        </div>
        </div>

    )
}