import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import BookingPage from '../BookingPage/BookingPage'
import CheckoutPage from '../CheckoutPage/CheckoutPage'
import PackageDetail from '../../components/PackageDetail/PackageDetail'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ?
      <> 
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/packages" element={<BookingPage />} />
            <Route path="/packages/checkout" element={<CheckoutPage />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}