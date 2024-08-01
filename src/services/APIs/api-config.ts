// Função para buscar as categorias
export const fetchCategories = async (ownerId?: number) => {
  try {
    // Monta a URL com o parâmetro de consulta ownerId, se fornecido
    let url = "http://localhost:3000/categories";
    if (ownerId !== undefined) {
      url += `?ownerId=${ownerId}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar categorias: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
};

// Função para buscar os itens
export const fetchItems = async (ownerId?: number) => {
  try {
    // Monta a URL com o parâmetro de consulta ownerId, se fornecido
    let url = "http://localhost:3000/items";
    if (ownerId !== undefined) {
      url += `?ownerId=${ownerId}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar itens: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return [];
  }
};

export interface ItemInferface {
  id: number;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  ownerId: number;
}

export interface CategoryInferface {
  id: number;
  title: string;
  description: string;
  ownerId: number;
}
