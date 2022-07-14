import React from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  const showMenu = React.createRef();
  const clickMenu = () => {
    showMenu.current.classList.toggle(styles.show);
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.nav__icon}>
          <h2 className={styles.nav__icon_title}>e-commerce</h2>
          <div className={styles.nav__icon_burger} onClick={clickMenu}>
            <div />
            <div />
            <div />
          </div>
        </div>

        <ul className={styles.nav__list} ref={showMenu}>
          <li>Home</li>
          <li>Add Product</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
