import { useEffect, useState } from "react";
import UpperMenu from "../../components/upper-menu/upper-menu";
import {
  fetchCategories,
  deleteCategory,
} from "../../services/APIs/api-config";
import { CategoryInferface } from "../../services/APIs/api-config";
import { useNavigate } from "react-router-dom";
import CategoryOptions from "../../components/category-options/category-options";
import "./my-categories.css"; // Certifique-se de criar e importar o arquivo CSS para centralizar os componentes

function MyCategories() {
  const [categories, setCategories] = useState<CategoryInferface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const data = await fetchCategories(1); // Fetch categories with ownerId = 1
      setCategories(data);
    };

    fetchCategoriesData();
  }, []);

  const handleEditCategory = (category: CategoryInferface) => {
    navigate("/insert-category", { state: { categoryOptions: category } });
  };

  const handleDeleteCategory = async (category: CategoryInferface) => {
    if (window.confirm("Tem certeza de que quer excluir essa categoria?")) {
      try {
        await deleteCategory(category.id, category.ownerId); // Passando ownerId para a função deleteCategory
        setCategories(
          categories.filter(
            (cat) =>
              !(cat.id === category.id && cat.ownerId === category.ownerId)
          )
        );
        alert("Categoria excluída com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir categoria:", error);
        alert(
          "Ocorreu um erro ao excluir a categoria. Por favor, tente novamente."
        );
      }
    }
  };

  const handleInsertCategory = () => {
    navigate("/insert-category");
  };

  return (
    <div>
      <UpperMenu />
      <div className="categories-container">
        <h2>Categorias</h2>
        <button className="general-button" onClick={handleInsertCategory}>
          Inserir Categoria
        </button>
        <div className="category-options-list">
          {categories.map((category) => (
            <CategoryOptions
              key={category.id}
              category={category}
              onEdit={handleEditCategory}
              onDelete={() => handleDeleteCategory(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCategories;
