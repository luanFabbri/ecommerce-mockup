import React from "react";
import { useLocation } from "react-router-dom";
import { ProductListInterface } from "../../utils/products-config";

const CheckProduct: React.FC = () => {
  const location = useLocation();
  const product: ProductListInterface = location.state.product;

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src="src/assets/images/Fusca.jpg"
        alt={product.title}
        style={{ width: "256px", height: "256px", objectFit: "contain" }}
      />
      <p>{product.description}</p>
      <p>Price: R${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default CheckProduct;
