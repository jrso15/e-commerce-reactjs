import { useState } from "react";
import Button from "./Button";
import styles from "../styles/AddProduct.module.scss";

const AddProductForm = ({ addProduct }) => {
  const initialFormState = {
    id: null,
    productName: "",
    quantity: "",
    price: "",
    dateAdded: "",
    image: null,
    description: "",
    longDescription: "",
  };

  const [img, setImg] = useState();
  const [product, setProducts] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProducts({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    const [fileImage] = event.target.files;

    setImg(URL.createObjectURL(fileImage));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !img ||
          !product.productName ||
          !product.quantity ||
          !product.price ||
          !product.description ||
          !product.longDescription
        )
          return;

        product.image = img;
        addProduct(product);
        setProducts(initialFormState);
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
      <Button name="ADD PRODUCT" />
    </form>
  );
};

export default AddProductForm;
