import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PackageList from '../../components/PackageList/PackageList'
import PackageDetail from "../../components/PackageDetail/PackageDetail"
import PackageListItem from "../../components/PackageListItem/PackageListItem"
import * as packageAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api';



export default function BookingPage({ user, setUser }){
  const [packages, setPackages] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  
  useEffect(function() {
    async function getItems() {
      const packages = await packageAPI.getAll();
      // console.log(packages)
      setPackages(packages);
    }
    getItems();

    // Load the user's cart (the unpaid order for that user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    //navigate('/checkout');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <PackageList packages={packages}/>
        <Link to="/booking" className="button btn-sm">PREVIOUS ORDERS</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <div>
        <PackageDetail packages={packages}/>
      </div>

    </main>
  );
}