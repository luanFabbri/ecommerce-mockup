import React from "react";
import "./product-big.css";
import { ProductListInterface } from "../../utils/products-config";
import { getTomorrowDate } from "../../utils/getTomorrowDate";
import { toReal } from "../../utils/toReal";
import { getProductImage } from "../../utils/getProductImage";

interface ProductBigProps {
  product: ProductListInterface;
}

const ProductBig: React.FC<ProductBigProps> = ({ product }) => {
  return (
    <div className="product-big-wrapper">
      <div className="product-big-container">
        <img
          src={getProductImage(product.title)}
          alt={product.title}
          className="product-big-image"
        />
        <div className="product-big-details">
          <h2 className="product-big-title">{product.title}</h2>
          <div>⭐⭐⭐⭐⭐</div> {/*Será implementado futuramente!*/}
          <p className="product-big-category">
            Categoria: {product.category} - {product.categoryDescription}
          </p>
          <p className="product-big-price">{toReal(product.price)}</p>
          <p className="product-big-stock">Em Estoque</p>
          <p className="product-big-description">{product.description}</p>
        </div>
      </div>
      <div className="product-big-extra">
        <div style={{ margin: 8 }}>
          <div>Produto novo: {toReal(product.price)}</div>
          <div>Entrega: {getTomorrowDate()}</div>
        </div>
        <button className="product-big-button">Adicionar ao carrinho</button>{" "}
        {/*Será implementado futuramente!*/}
      </div>
    </div>
  );
};

export default ProductBig;
