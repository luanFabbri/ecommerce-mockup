// index.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpperMenu from "../../components/upper-menu/upper-menu";
import { fetchCategories, fetchItems } from "../../services/APIs/api-config";
import {
  ProductListInterface,
  productsConfiguration,
} from "../../utils/products-config";
import ProductMini from "../../components/product-mini/product-mini";

function Index() {
  const [products, setProducts] = useState<ProductListInterface[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const items = await fetchItems();
      const categories = await fetchCategories();
      const productsList = productsConfiguration(items, categories);
      setProducts(productsList);
    };

    loadData();
  }, []);

  return (
    <div>
      <UpperMenu />
      <div>
        {products.map((product) => (
          <ProductMini key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Index;
