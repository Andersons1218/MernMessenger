import CheckoutList from '../../components/Checkout/CheckoutList'
import * as userService from '../../utilities/users-service'

export default function CheckoutPage(checkout) {

    function showCheckout() {
        console.log(`Here are the Packages you ordered: ${checkout}.`)
    }

    async function handleCheckToken(){
       const expDate = await userService.checkToken()
        console.log(expDate)
       
    }

    return(
        <>
    <h1> Order History </h1>

    
    <button onClick={showCheckout}> Check The Status of Cart </button>

    <button onClick={handleCheckToken}> Check when my account Expires </button>
    <CheckoutList />
    <checkoutListItem />

    </>
    )
}