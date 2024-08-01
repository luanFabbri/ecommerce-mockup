import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UpperMenu from "../../components/upper-menu/upper-menu";
import { createCategory, updateCategory } from "../../services/APIs/api-config";
import "./insert-category.css";

interface CategoryInterface {
  id: number;
  title: string;
  description: string;
  ownerId: number;
}

const InsertCategory: React.FC = () => {
  const location = useLocation();
  const categoryOptions = location.state?.categoryOptions as CategoryInterface;

  const [categoryTitle, setCategoryTitle] = useState(
    categoryOptions?.title || ""
  );
  const [categoryDescription, setCategoryDescription] = useState(
    categoryOptions?.description || ""
  );
  const [isEditing, setIsEditing] = useState<boolean>(!!categoryOptions);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const categoryData = {
      title: categoryTitle,
      description: categoryDescription,
      ownerId: 1, // Fixed ownerId as per requirement
    };

    try {
      if (isEditing) {
        await updateCategory(categoryOptions!.id, 1, categoryData);
        alert("Categoria alterada com sucesso!");
      } else {
        await createCategory(categoryData);
        alert("Categoria inserida com sucesso!");
      }
      navigate("/my-categories");
    } catch (error) {
      console.error("Erro ao salvar a categoria:", error);
      alert(
        "Ocorreu um erro ao salvar a categoria. Por favor, tente novamente."
      );
    }
  };

  return (
    <div>
      <UpperMenu />
      <div style={{ padding: "20px" }}>
        <h2>{isEditing ? "Alterar Categoria" : "Inserir Categoria"}</h2>
        <form>
          <div className="insert-category-input-area">
            <label>Título da Categoria</label>
            <br />
            <input
              type="text"
              className="insert-category-input"
              value={categoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
            />
          </div>
          <div className="insert-category-input-area">
            <label>Descrição</label>
            <br />
            <textarea
              className="insert-category-input"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="common-button"
            onClick={handleSubmit}
          >
            {isEditing ? "Alterar" : "Inserir"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsertCategory;
