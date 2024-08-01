import React from "react";
import "./product-big.css";
import { ProductListInterface } from "../../utils/products-config";

interface ProductBigProps {
  product: ProductListInterface;
}

const ProductBig: React.FC<ProductBigProps> = ({ product }) => {
  return <div>ProductBig</div>;
};

export default ProductBig;
