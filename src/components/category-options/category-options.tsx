import React from "react";
import "./category-options.css";
import { CategoryInferface } from "../../services/APIs/api-config";

interface CategoryOptionsProps {
  category: CategoryInferface;
  onEdit: (category: CategoryInferface) => void;
  onDelete: (category: CategoryInferface) => void;
}

const CategoryOptions: React.FC<CategoryOptionsProps> = ({
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="category-options">
      <div className="category-title">{category.title}</div>
      <div className="category-description">{category.description}</div>
      <div className="category-buttons">
        <button className="general-button" onClick={() => onEdit(category)}>
          Alterar Categoria
        </button>
        <button className="general-button" onClick={() => onDelete(category)}>
          Excluir Categoria
        </button>
      </div>
    </div>
  );
};

export default CategoryOptions;
