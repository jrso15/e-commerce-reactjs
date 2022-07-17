import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductInformation.module.scss";

const ProductInformation = () => {
  const [productData, setProductData] = useState("");

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);

      console.log("res", res);

      const test = await res.json();

      setProductData(test);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.information}>
      <div className={styles.information__wrapper}>
        <div className={styles.information__wrapper_thumbnail}>
          <img src={productData.image} alt={productData.productName} />
        </div>
        <div className={styles.information__wrapper_details}>
          <h1 className={styles.productName}> {productData.productName}</h1>
          <p className={styles.price}>PHP {productData.price}</p>
          <p className={styles.description}> {productData.description}</p>
        </div>
      </div>

      <p className={styles.longDescription}>{productData.longDescription}</p>
    </div>
  );
};

export default ProductInformation;
