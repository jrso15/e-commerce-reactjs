import { useState } from "react";
import ProductDetails from "./ProductDetails";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import productsData from "../api/products-data.json";

const AddProduct = () => {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const initialFormState = {
    id: null,
    productName: "",
    quantity: "",
    price: "",
    dateAdded: date,
    image: null,
    description: "",
    longDescription: "",
  };

  const [products, setProducts] = useState(productsData);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentproduct] = useState(initialFormState);

  console.log("test", products);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const editProduct = (product) => {
    setEditing(true);

    setCurrentproduct({
      id: product.id,
      productName: product.productName,
      quantity: product.quantity,
      price: product.price,
      dateAdded: product.dateAdded,
      image: product.image,
      description: product.description,
      longDescription: product.longDescription,
    });
  };

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <div className="product-details">
        <div className="product-details-list">
          {editing ? (
            <div>
              <h2>EDIT PRODUCT</h2>
              <EditProductForm
                setEditing={setEditing}
                currentProduct={currentProduct}
                updateProduct={updateProduct}
              />
            </div>
          ) : (
            <div>
              <h3>ADD PRODUCTS</h3>
              <AddProductForm addProduct={addProduct} />
            </div>
          )}
        </div>

        <div className="product-details-list">
          <h2>VIEW PRODUCTS</h2>
          <ProductDetails
            products={products}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
