import Button from "./Button";
import styles from "../styles/AddProduct.module.scss";

const ProductDetails = ({ productLists, editProduct, deleteProduct }) => {
  return (
    <div className={styles.productDetails__container__listing}>
      <div className={styles.heading}>
        <div className={styles.heading__title}>Product Name</div>
        <div className={styles.heading__title}>Quantity</div>
        <div className={styles.heading__title}>Price </div>
        <div className={styles.heading__title}>Date Added </div>
        <div className={styles.heading__title}> Image</div>
        <div className={styles.heading__title}>Description </div>
        <div className={styles.heading__title}> Long Description </div>
        <div className={styles.heading__title}> Edit/Delete </div>
      </div>
      <>
        {productLists.length > 0 ? (
          productLists.map((product) => (
            <div className={styles.listing_body} key={product.id}>
              <div className={styles.listing_body__info}>
                {product.productName}
              </div>
              <div className={styles.listing_body__info}>
                {product.quantity}
              </div>
              <div className={styles.listing_body__info}>{product.price}</div>
              <div className={styles.listing_body__info}>
                {product.dateAdded}
              </div>
              <div className={styles.listing_body__info}>
                <img
                  className={styles.image}
                  src={product.image}
                  alt={product.productName}
                />
              </div>
              <div className={styles.listing_body__info}>
                {product.description}
              </div>
              <div className={styles.listing_body__info}>
                {product.longDescription}
              </div>

              <div className={styles.listing_body__info}>
                <Button
                  name="EDIT"
                  handleOnClick={() => editProduct(product)}
                />
                <Button
                  name="DELETE"
                  handleOnClick={() => deleteProduct(product.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className={styles.listing_body}>
            <h2>NO PRODUCTS</h2>
          </div>
        )}
      </>
    </div>
  );
};

export default ProductDetails;
