import * as userService from '../../utilities/users-service'

export default function CheckoutPage({checkout}) {

    function showCheckout() {
        checkout.map((item) => {
            console.log(`Here are the Packages you ordered: ${item._id}.`)
        })
    }

    async function handleCheckToken(){
       const expDate = await userService.checkToken()
        console.log(expDate)
       
    }

    return(
        <>
    <h1> Order History </h1>
    <button onClick={handleCheckToken}> Check if My Login Expires </button>
    <button onClick={showCheckout}> Check The Status of Cart </button>
    </>
    )
}