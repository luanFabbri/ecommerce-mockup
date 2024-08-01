import React from "react";
import "./product-mini.css";
import { ProductListInterface } from "../../utils/products-config";
import { useNavigate } from "react-router-dom";

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
    <div className="product-mini" onClick={handleProductClick}>
      <img
        src="src/assets/images/Fusca.jpg"
        alt={product.title}
        className="product-image"
      />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">R${product.price.toFixed(2)}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductMini;
