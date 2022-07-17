import styles from "../styles/Button.module.scss";

const Button = ({ name, handleOnClick }) => {
  return (
    <div className={styles.btnWrapper}>
      <button onClick={handleOnClick} className={styles.btnStyles}>
        {name}
      </button>
    </div>
  );
};

export default Button;
