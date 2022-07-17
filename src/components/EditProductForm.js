import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../styles/AddProduct.module.scss";

const EditProductForm = ({ setEditing, currentProduct, updateProduct }) => {
  const [img, setImg] = useState();
  const [product, setProduct] = useState(currentProduct);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    const [fileImage] = event.target.files;

    setImg(URL.createObjectURL(fileImage));
  };

  useEffect(() => {
    setProduct(currentProduct);
  }, [currentProduct]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        product.image = img;
        updateProduct(product.id, product);
      }}
      className={styles.productDetails__container_form}
    >
      <div className={styles.fields}>
        <input
          className="field"
          type="text"
          name="productName"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleInputChange}
        />

        <input
          className="field"
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />

        <input
          className="field"
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleInputChange}
        />

        <textarea
          className={styles.textArea}
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleInputChange}
        />

        <textarea
          className={styles.textArea}
          name="longDescription"
          placeholder="Long description"
          value={product.longDescription}
          onChange={handleInputChange}
        />

        <div className={styles.image}>
          <label>Date Added:</label>
          <input
            className="field"
            type="date"
            name="dateAdded"
            placeholder="Date Added"
            value={product.dateAdded}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.image}>
          <label>Image:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onInput={handleImageChange}
          />
        </div>
      </div>

      <Button name="UPDATE PRODUCT" />
      <Button name="CANCEL" handleOnClick={() => setEditing(false)} />
    </form>
  );
};

export default EditProductForm;
