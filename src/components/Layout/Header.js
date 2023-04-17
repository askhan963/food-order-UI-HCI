import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ComsisFoods</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        
      </header>
      <div className={classes['main-image']}>
        <img src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;