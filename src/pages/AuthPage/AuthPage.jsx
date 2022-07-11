import { useState } from 'react';
import SignUpForm from '../../components/Signupform/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>MernTravelCo</h1>
      {showLogin ? <LoginForm setUser={setUser} setShowLogin={setShowLogin} /> : <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />}

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setShowLogin(!showLogin)}> {showLogin ? 'SIGN UP' : 'LOG IN'}</button>
    </main> 
  );
}