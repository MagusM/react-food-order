import React from 'react';

import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

import mealsImage from '../../assests/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A tale of good food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
