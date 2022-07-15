import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductLists";
import AddProduct from "./AddProduct";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  const showMenu = React.createRef();
  const clickMenu = () => {
    showMenu.current.classList.toggle(styles.show);
  };

  return (
    <Router>
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
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/addproduct">
                Add Product
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} exact />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
