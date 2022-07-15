import React, { useState, useEffect } from "react";

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

      <button className="btn-update">Update Order</button>
      <button
        onClick={() => setEditing(false)}
        className="btn-update muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
