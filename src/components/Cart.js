import Button from "./Button";
import styles from "../styles/AddProduct.module.scss";

const Cart = ({ cartItems, handleBackBtn }) => {
  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className={styles.productDetails__container__listing}>
      <div className={styles.cart__wrapper}>
        <h2>Cart Details</h2>
        <div className={styles.heading}>
          <div className={styles.heading__title}>Product Name</div>
          <div className={styles.heading__title}>Price </div>
          <div className={styles.heading__title}>Quantity</div>
          <div className={styles.heading__title}>Total</div>
        </div>
        <>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className={styles.listing_body} key={item.id}>
                <div className={styles.listing_body__info}>
                  {item.productName}
                </div>

                <div className={styles.listing_body__info}>{item.price}</div>
                <div className={styles.listing_body__info}>{item.quantity}</div>
                <div className={styles.listing_body__info}>
                  {item.price * item.quantity}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.listing_body}>
              <h2>EMPTY CART</h2>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className={styles.totalContainer}>
              <p className={styles.totalContainer__grid}>TOTAL: </p>
              <p className={styles.totalContainer__grid}>PHP {getTotal()}</p>
            </div>
          )}
        </>

        <div className={styles.backBtn}>
          <Button name="Back" handleOnClick={handleBackBtn} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
