import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductLists";
import AddProduct from "./AddProduct";
import styles from "../styles/NavBar.module.scss";
import ProductInformation from "./ProductInformation";

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
            <Link className="nav-link" to="/">
              <h2 className={styles.nav__icon_title}>Fashion Online Shop</h2>
            </Link>
            <div className={styles.nav__icon_burger} onClick={clickMenu}>
              <div />
              <div />
              <div />
            </div>
          </div>

          <ul className={styles.nav__list} ref={showMenu}>
            <li>
              <Link className="nav-link" to="/">
                Shop
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

      <main className={styles.container}>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductInformation />} />
        </Routes>
      </main>
    </Router>
  );
};

export default NavBar;
