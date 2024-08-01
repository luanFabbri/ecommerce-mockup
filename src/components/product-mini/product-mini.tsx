import React from "react";
import "./product-mini.css";
import { ProductListInterface } from "../../utils/products-config";
import { useNavigate } from "react-router-dom";
import { toReal } from "../../utils/toReal";
import { getProductImage } from "../../utils/getProductImage";

interface ProductMiniProps {
  product: ProductListInterface;
}

const ProductMini: React.FC<ProductMiniProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/check-product", { state: { product } });
  };

  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho pode ser adicionada aqui
    console.log(`${product.title} adicionado ao carrinho!`);
  };

  return (
    <div className="product-mini">
      <img
        src={getProductImage(product.title)}
        alt={product.title}
        className="product-image"
        onClick={handleProductClick}
      />
      <div className="product-details">
        <h2 className="product-title" onClick={handleProductClick}>
          {product.title}
        </h2>
        <div>⭐⭐⭐⭐⭐</div>
        <p className="product-price">{toReal(product.price)}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductMini;
