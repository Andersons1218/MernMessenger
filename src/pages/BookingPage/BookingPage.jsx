export default function BookingPage(){

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
      }


    return(
    <h1> New Booking </h1>
    )
}