import React, { useState, useContext } from 'react';
import Cart from './components/Cart/Cart';

import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import AuthContext from './store/auth-context';
import CartProvider from './store/CartProvider';


function App() {
  //state management
  const [cartIsShown, setCartIsShown] = useState(false);

  //context management
  const ctx = useContext(AuthContext);

  //functions
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Header 
        isAuthenticated={ctx.isLoggedIn} 
        onLogout={ctx.logoutHandler} 
        onShowCart={showCartHandler}   
      />
      <main>
        {/* <Home /> */}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
