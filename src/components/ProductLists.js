import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Cart from "./Cart";
import productsLists from "../api/products-listing.json";
import styles from "../styles/ProductList.module.scss";

const ProductsList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleSelectedItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleViewCart = () => {
    setShowCart(true);
  };

  const handleBackBtn = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart ? (
        <Cart cartItems={cartItems} handleBackBtn={handleBackBtn} />
      ) : (
        <>
          <div className={styles.subHeading}>
            <h2 className={styles.title}> Product Lists </h2>
            <Button name="View Cart" handleOnClick={handleViewCart} />
          </div>

          <div className={styles.productContainer}>
            {productsLists.products.map((product) => {
              return (
                <div key={product.id} className={styles.productContainer__list}>
                  <Link to={"/product/" + product.id}>
                    <div className={styles.productContainer__list_thumbnail}>
                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className={styles.productContainer__list_details}>
                      <h3 className={styles.name}> {product.productName} </h3>
                      <p className={styles.price}> PHP {product.price} </p>
                    </div>
                  </Link>

                  <Button
                    name="Add to Cart"
                    handleOnClick={() => handleSelectedItem(product)}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ProductsList;
