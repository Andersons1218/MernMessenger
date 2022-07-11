import CheckoutList from '../../components/Checkout/CheckoutList'
import CheckoutTotal from '../../components/Checkout/CheckoutTotal'
import * as userService from '../../utilities/users-service'
import * as packagesAPI from '../../utilities/packages-api'

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
       }

    return(

    <main style={{display: 'flex', flexFlow: 'row-nowrap', width: '100vw', justifyContent: 'space-between'}}className="CheckoutPage">
    <CheckoutList checkout={checkout} setCheckout={setCheckout} />
    <aside>
        <CheckoutTotal checkout={checkout} addToProf={addPackageToProfile} />
    </aside>
    </main>
    )
}