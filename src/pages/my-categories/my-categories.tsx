import { useEffect, useState } from "react";
import UpperMenu from "../../components/upper-menu/upper-menu";
import { fetchCategories } from "../../services/APIs/api-config";
import { CategoryInferface } from "../../services/APIs/api-config";

function MyCategories() {
  const [categories, setCategories] = useState<CategoryInferface[]>([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const data = await fetchCategories(1); // Fetch categories with ownerId = 1
      setCategories(data);
    };

    fetchCategoriesData();
  }, []);

  return (
    <div>
      <UpperMenu />
      <h1>Página MyCategories</h1>
      <div>
        <h2>Categorias</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <strong>{category.title}</strong>: {category.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyCategories;
