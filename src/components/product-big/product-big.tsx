import React from "react";
import "./product-big.css";
import { ProductListInterface } from "../../utils/products-config";
import { getTomorrowDate } from "../../utils/getTomorrowDate";

interface ProductBigProps {
  product: ProductListInterface;
}

const ProductBig: React.FC<ProductBigProps> = ({ product }) => {
  return (
    <div className="product-big-wrapper">
      <div className="product-big-container">
        <img
          src="src/assets/images/Sapato.jpg"
          alt={product.title}
          className="product-big-image"
        />
        <div className="product-big-details">
          <h2 className="product-big-title">{product.title}</h2>
          <p className="product-big-category">Categoria: {product.category}</p>
          <p className="product-big-price">R${product.price.toFixed(2)}</p>
          <p className="product-big-description">{product.description}</p>
        </div>
      </div>
      <div className="product-big-extra">
        <div style={{ margin: 8 }}>
          <div>Produto novo: R${product.price.toFixed(2)}</div>
          <div>Entrega: {getTomorrowDate()}</div>
        </div>

        <button className="product-big-button">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default ProductBig;
