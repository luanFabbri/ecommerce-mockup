export const toReal = (n: number): string => {
  return n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
