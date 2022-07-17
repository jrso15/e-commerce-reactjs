import { useState } from "react";
import ProductDetails from "./ProductDetails";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import productLists from "../api/products-listing.json";
import styles from "../styles/AddProduct.module.scss";

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

  const [productsData, setProductsData] = useState(productLists.products);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentproduct] = useState(initialFormState);

  console.log("testss", productsData);

  const addProduct = (product) => {
    product.id = productsData.length + 1;
    setProductsData([...productsData, product]);
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
    setProductsData(
      productsData.map((product) =>
        product.id === id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProductsData(productsData.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className={styles.productDetails}>
        <div className={styles.productDetails__container}>
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
            <>
              <h2>ADD PRODUCTS</h2>
              <AddProductForm addProduct={addProduct} />
            </>
          )}
        </div>

        <div className={styles.productDetails__container}>
          <h2>VIEW PRODUCTS</h2>
          <ProductDetails
            productLists={productsData}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
