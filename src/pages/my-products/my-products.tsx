import { useEffect, useState } from "react";
import UpperMenu from "../../components/upper-menu/upper-menu";
import {
  fetchCategories,
  fetchItems,
  ItemInferface,
  CategoryInferface,
} from "../../services/APIs/api-config";
import {
  productsConfiguration,
  ProductListInterface,
} from "../../utils/products-config";

function MyProducts() {
  const [categories, setCategories] = useState<CategoryInferface[]>([]);
  const [items, setItems] = useState<ItemInferface[]>([]);
  const [products, setProducts] = useState<ProductListInterface[]>([]);

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

  return (
    <div>
      <UpperMenu />
      <h1>Página MyProducts</h1>
      <div>
        <h2>Meus Produtos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong>: {product.description} - $
              {product.price} (Categoria: {product.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProducts;
