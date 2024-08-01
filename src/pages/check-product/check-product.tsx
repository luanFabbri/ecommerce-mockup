import React from "react";
import { useLocation } from "react-router-dom";
import ProductBig from "../../components/product-big/product-big";
import UpperMenu from "../../components/upper-menu/upper-menu";

const CheckProduct: React.FC = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <UpperMenu />
      <div className="check-product-container">
        <ProductBig product={product} />
      </div>
    </div>
  );
};

export default CheckProduct;
