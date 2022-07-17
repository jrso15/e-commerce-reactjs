import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import productsLists from "../api/products-listing.json";
import styles from "../styles/ProductList.module.scss";

const ProductsList = () => {
  return (
    <>
      <h2 className="title"> Product Lists </h2>

      <div className={styles.productContainer}>
        {productsLists.products.map((product) => {
          return (
            <Link
              key={product.id}
              to={"/product/" + product.id}
              className={styles.productContainer__list}
            >
              <div className={styles.productContainer__list_thumbnail}>
                <img src={product.image} alt={product.name} />
              </div>

              <div className={styles.productContainer__list_details}>
                <div className={styles.name}> {product.productName} </div>
                <div className="product-list"> PHP {product.price} </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
