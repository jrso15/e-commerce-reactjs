const ProductDetails = ({ products, editProduct, deleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price </th>
          <th>Date Added </th>
          <th> Image</th>
          <th>Description </th>
          <th> Long Description </th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((order) => (
            <tr key={order.id}>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.dateAdded}</td>
              <td>
                <img src={order.image} alt={order.productName} />{" "}
              </td>
              <td>{order.description}</td>
              <td>{order.longDescription}</td>

              <td>
                <button
                  onClick={() => {
                    editProduct(order);
                  }}
                  className="btn muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(order.id)}
                  className="btn muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No PRODUCTS</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductDetails;
