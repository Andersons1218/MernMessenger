import CheckoutListItem from "./CheckoutListItem";

export default function CheckoutList({checkout, setCheckout}) {
    return(
        <>
    { checkout.map(pkg => {
      return <CheckoutListItem key={pkg._id} pkg={pkg} />
    })}
        </>
    )
}