// Função para buscar as categorias
export const fetchCategories = async (ownerId?: number) => {
  try {
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

// Função para criar um novo produto
export const createProduct = async (productData: any) => {
  try {
    const response = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
  }
};

// Função para atualizar um produto existente
export const updateProduct = async (productId: number, productData: any) => {
  try {
    const response = await fetch(`http://localhost:3000/items/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
  }
};

// Função para deletar um produto existente
export const deleteProduct = async (productId: number) => {
  try {
    const response = await fetch(`http://localhost:3000/items/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Erro ao excluir produto: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
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
