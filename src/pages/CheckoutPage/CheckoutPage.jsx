import CheckoutList from '../../components/Checkout/CheckoutList'
import * as userService from '../../utilities/users-service'

export default function CheckoutPage(props) {

    async function handleCheckToken(){
       const expDate = await userService.checkToken()
        console.log(expDate)
       
    }

    return(
        <>
    <h1> Order History </h1>
    <button onClick={handleCheckToken}> Check when my account Expires </button>
    <CheckoutList />
    <checkoutListItem />
    </>
    )
}