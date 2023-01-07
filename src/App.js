import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import About from './components/About/About';
import Wrapper from './components/Wrapper/Wrap'
import Mobile from './components/Mobiles/Mobile';
import Login from './components/Login/login';


function App() {
  const [login, setLogin] = useState(false);
  const loginHandler = (userloggedIn) => {
    setLogin(userloggedIn);
  }

  return (
    <div className="App">
      <Header />
      <Wrapper />

      {
        !login && <Login isLogIn={loginHandler} />
      }
      {
        login && <Mobile />
      }

  

      </div>
    
  );
}

export default App;
