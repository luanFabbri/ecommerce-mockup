import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperMenu from "../../components/upper-menu/upper-menu";
import {
  fetchCategories,
  fetchItems,
  deleteProduct,
  ItemInferface,
  CategoryInferface,
} from "../../services/APIs/api-config";
import {
  productsConfiguration,
  ProductListInterface,
} from "../../utils/products-config";
import ProductOptions from "../../components/product-options/product-options";
import "./my-products.css"; // Certifique-se de criar este arquivo CSS

function MyProducts() {
  const [categories, setCategories] = useState<CategoryInferface[]>([]);
  const [items, setItems] = useState<ItemInferface[]>([]);
  const [products, setProducts] = useState<ProductListInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories(1); // Busca categorias do ownerId = 1
        setCategories(fetchedCategories);

        const fetchedItems = await fetchItems(1); // Busca itens do ownerId = 1
        setItems(fetchedItems);

        const configuredProducts = productsConfiguration(
          fetchedItems,
          fetchedCategories
        );
        setProducts(configuredProducts);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleInsertItem = () => {
    navigate("/insert-product");
  };

  const handleEditItem = (product: ProductListInterface) => {
    navigate("/insert-product", { state: { productOptions: product } });
  };

  const handleDeleteItem = async (productId: number) => {
    if (window.confirm("Tem certeza de que quer excluir esse item?")) {
      try {
        await deleteProduct(productId);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
        alert("Ocorreu um erro ao tentar excluir o produto.");
      } finally {
        navigate("/my-products");
      }
    }
  };

  return (
    <div>
      <UpperMenu />
      <div>
        <h2 style={{ marginLeft: 16 }}>Meus Produtos</h2>
        <button
          className="general-button"
          style={{ marginLeft: 16 }}
          onClick={handleInsertItem}
        >
          Inserir item
        </button>
        <div className="products-container">
          {products.map((product) => (
            <ProductOptions
              key={product.id}
              product={product}
              onEdit={() => handleEditItem(product)}
              onDelete={() => handleDeleteItem(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
