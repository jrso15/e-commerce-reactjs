import products from "../api/products-data.json";

const ProductsList = () => {
  return (
    <div>
      <main>
        <h1 className="title"> Orders List </h1>
        <div className="sub-heading">
          <div className="order-title"> ID </div>
          <div className="order-title"> Products </div>
          <div className="order-title"> Quantity </div>
          <div className="order-title"> Price </div>
          <div className="order-title"> Image </div>
          <div className="order-title"> Date Added </div>
          <div className="order-title"> Description </div>
          <div className="order-title"> longDescription </div>
        </div>
        {products.map((product, i) => {
          return (
            <div key={i} className="orders-container">
              <div className="order-list"> {product.id} </div>
              <div className="order-list"> {product.productName} </div>
              <div className="order-list"> {product.quantity} </div>
              <div className="order-list"> PHP {product.price} </div>
              <div className="order-list">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="order-list"> {product.dateAdded} </div>
              <div className="order-list"> {product.description} </div>
              <div className="order-list"> {product.longDescription} </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ProductsList;
