import React from "react";
import "./product-options.css";
import { ProductListInterface } from "../../utils/products-config";

interface ProductOptionsProps {
  product: ProductListInterface;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ product }) => {
  return <div>ProductOptions</div>;
};

export default ProductOptions;
