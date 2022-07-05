import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PackageList from '../../components/PackageList/PackageList'
import PackageDetail from "../../components/PackageDetail/PackageDetail"
import PackageListItem from "../../components/PackageListItem/PackageListItem"
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';



export default function BookingPage({ user, setUser }){
  const [packages, setPackages] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  // Obtain a ref object
  const categoriesRef = useRef([]);

  // useEffect(function() {
  //   console.log('NewOrderPage rendered');
  // });
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat]
      }, []);
      setActiveCat(categoriesRef.current[1]);
      setMenuItems(items);
    }
    getItems();

    // Load the user's cart (the unpaid order for that user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // the empty dependency array above will result in 
  // the function running after the FIRST render
  // only

  return (
    <main className="NewOrderPage">
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <PackageList
        packages={packages.filter(item => item.category.name === activeCat)}
      />
      <PackageDetail order={cart} />
    </main>
  );
}