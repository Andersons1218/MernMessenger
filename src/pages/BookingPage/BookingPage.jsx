import PackageList from "../../components/PackageList/PackageList"

export default function BookingPage(){

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
      }


    return(
        <main className="NewOrderPage">
        <aside>  
          <PackageList />
        </aside>
        
      </main>
    )
}