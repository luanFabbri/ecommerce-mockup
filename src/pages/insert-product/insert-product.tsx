import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UpperMenu from "../../components/upper-menu/upper-menu";
import {
  fetchCategories,
  createProduct,
  updateProduct,
} from "../../services/APIs/api-config";
import { ProductListInterface } from "../../utils/products-config";
import "./insert-product.css";

interface CategoryInterface {
  id: number;
  title: string;
  ownerId: number;
}

const InsertProduct: React.FC = () => {
  const location = useLocation();
  const productOptions = location.state?.productOptions as ProductListInterface;

  const [productName, setProductName] = useState(productOptions?.title || "");
  const [productDescription, setProductDescription] = useState(
    productOptions?.description || ""
  );
  const [productPrice, setProductPrice] = useState(productOptions?.price || "");
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [isEditing, setIsEditing] = useState<boolean>(!!productOptions);
  const navigate = useNavigate();

  useEffect(() => {
    //TODO - Criar função externa
    const fetchAndSetCategories = async () => {
      const categoryData = await fetchCategories();
      const filteredCategories = categoryData.filter(
        (cat: CategoryInterface) => cat.ownerId === 1
      );
      setCategories(filteredCategories);

      if (productOptions) {
        const selectedCategory = filteredCategories.find(
          (cat: { title: string }) => cat.title === productOptions.category
        );
        if (selectedCategory) {
          setSelectedCategoryId(selectedCategory.id);
        }
      }
    };
    fetchAndSetCategories();
  }, [productOptions]);

  // Função de suporte ao select
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategoryId(parseInt(event.target.value, 10));
  };

  // TODO - Necessário adicionar as validações
  const handleSubmit = async () => {
    if (selectedCategoryId === null) {
      console.error("Category not selected.");
      return;
    }

    const productData = {
      title: productName,
      description: productDescription,
      price: parseFloat(productPrice.toString()),
      categoryId: selectedCategoryId,
      ownerId: 1,
    };

    try {
      if (isEditing) {
        await updateProduct(productOptions!.id, productData);
        alert("Produto alterado com sucesso!");
      } else {
        await createProduct(productData);
        alert("Produto inserido com sucesso!");
      }
      navigate("/my-products");
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
      alert("Ocorreu um erro ao salvar o produto. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <UpperMenu />
      <div style={{ padding: "20px" }}>
        <h2>{isEditing ? "Alterar Produto" : "Inserir Produto"}</h2>
        <form>
          <div className="insert-product-input-area">
            <label>Nome do Produto</label>
            <br />
            <input
              type="text"
              className="insert-product-input"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="insert-product-input-area">
            <label>Descrição</label>
            <br />
            <textarea
              className="insert-product-input"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="insert-product-input-area">
            <label>Categoria</label>
            <br />
            <select
              value={selectedCategoryId || ""}
              onChange={handleCategoryChange}
              className="insert-product-select"
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          <div className="insert-product-input-area">
            <label>Preço</label>
            <br />
            <input
              className="insert-product-input"
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
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

export default InsertProduct;
