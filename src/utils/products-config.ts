import { ItemInferface, CategoryInferface } from "../services/APIs/api-config";

export interface ProductListInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryDescription: string;
}

export const productsConfiguration = (
  items: ItemInferface[],
  categories: CategoryInferface[]
): ProductListInterface[] => {
  // Função auxiliar para encontrar a categoria pelo ID e ownerId
  const findCategoryTitle = (
    itemOwnerId: number,
    itemCategoryId: number
  ): string => {
    // Encontra a categoria que corresponde ao ownerId e categoryId do item
    const category = categories.find(
      (cat) => cat.ownerId === itemOwnerId && cat.id === itemCategoryId
    );
    // Retorna o título da categoria se encontrada, caso contrário retorna "Desconhecida"
    return category ? category.title : "Desconhecida";
  };
  const findCategoryDescription = (
    itemOwnerId: number,
    itemCategoryId: number
  ): string => {
    const category = categories.find(
      (cat) => cat.ownerId === itemOwnerId && cat.id === itemCategoryId
    );
    return category ? category.description : "Desconhecida";
  };

  // Mapeia os itens para a nova interface e adiciona a categoria correspondente
  const products: ProductListInterface[] = items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    ownerId: item.ownerId,
    categoryId: item.categoryId,
    category: findCategoryTitle(item.ownerId, item.categoryId),
    categoryDescription: findCategoryDescription(item.ownerId, item.categoryId),
  }));

  return products;
};
