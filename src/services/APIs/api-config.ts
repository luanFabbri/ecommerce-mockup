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
// Função para excluir uma categoria
export const deleteCategory = async (categoryId: number, ownerId: number) => {
  try {
    const response = await fetch(
      `http://localhost:3000/categories/${categoryId}?ownerId=${ownerId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Verifica se a resposta é OK e retorna um status adequado
    if (response.ok) {
      if (response.status === 204) {
        // Resposta com status 204 No Content, não precisa processar o corpo
        return;
      } else {
        // Se houver um corpo, tenta interpretar como JSON
        return response.json();
      }
    } else {
      // Se a resposta não for OK, lança um erro
      throw new Error(`Erro ao excluir categoria: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    throw error; // Re-throw para que o código chamador possa lidar com o erro
  }
};

// Função para criar uma nova categoria
export const createCategory = async (categoryData: {
  title: string;
  description: string;
  ownerId: number;
}) => {
  const response = await fetch(`http://localhost:3000/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryData),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar a categoria.");
  }

  return response.json();
};

// Função para atualizar uma categoria existente
export const updateCategory = async (
  categoryId: number,
  ownerId: number,
  categoryData: {
    title: string;
    description: string;
    ownerId: number;
  }
) => {
  const response = await fetch(
    `http://localhost:3000/categories/${categoryId}?ownerId=${ownerId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao atualizar a categoria.");
  }

  return response.json();
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
