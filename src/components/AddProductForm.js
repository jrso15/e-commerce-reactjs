import { useState } from "react";

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
    >
      <label>Product Name</label>
      <input
        className="field"
        type="text"
        name="productName"
        value={product.productName}
        onChange={handleInputChange}
      />
      <label>Quantity</label>
      <input
        className="field"
        type="text"
        name="quantity"
        value={product.quantity}
        onChange={handleInputChange}
      />

      <label>Price</label>
      <input
        className="field"
        type="text"
        name="price"
        value={product.price}
        onChange={handleInputChange}
      />

      <label>Date Added</label>
      <input
        className="field"
        type="date"
        name="dateAdded"
        value={product.dateAdded}
        onChange={handleInputChange}
      />

      <label>Image</label>
      <input
        type="file"
        multiple
        accept="image/*"
        onInput={handleImageChange}
      />

      <label>description</label>
      <input
        className="field"
        type="text"
        name="description"
        value={product.description}
        onChange={handleInputChange}
      />

      <label>long description</label>
      <input
        className="field"
        type="text"
        name="longDescription"
        value={product.longDescription}
        onChange={handleInputChange}
      />

      <button className="btn-product">Add product</button>
    </form>
  );
};

export default AddProductForm;
