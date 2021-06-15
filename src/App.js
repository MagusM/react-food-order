import React, { useContext } from 'react';
import Cart from './components/Cart/Cart';

import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import AuthContext from './store/auth-context';


function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Cart />
      <Header isAuthenticated={ctx.isLoggedIn} onLogout={ctx.logoutHandler} />
      <main>
        {/* <Home /> */}
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
