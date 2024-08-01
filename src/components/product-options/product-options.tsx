import React from "react";
import "./product-options.css";
import { ProductListInterface } from "../../utils/products-config";
import { useNavigate } from "react-router-dom";

interface ProductOptionsProps {
  product: ProductListInterface;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/check-product", { state: { product } });
  };

  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho pode ser adicionada aqui
    console.log(`${product.title} adicionado ao carrinho!`);
  };

  return (
    <div className="product-options">
      <img
        src="src/assets/images/Fusca.jpg"
        alt={product.title}
        className="product-image"
        onClick={handleProductClick}
      />
      <div className="product-details">
        <h2 className="product-title" onClick={handleProductClick}>
          {product.title}
        </h2>
        <p className="product-price">R${product.price.toFixed(2)}</p>
        <button className="general-button" onClick={onEdit}>
          Alterar item
        </button>
        <button className="general-button" onClick={onDelete}>
          Excluir item
        </button>
      </div>
    </div>
  );
};

export default ProductOptions;
