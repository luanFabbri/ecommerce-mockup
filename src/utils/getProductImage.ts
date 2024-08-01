export const getProductImage = (productTitle: string): string => {
  if (productTitle === "Carro") return "src/assets/images/Fusca.jpg";
  if (productTitle === "Câmera") return "src/assets/images/Camera.jpg";
  if (productTitle === "Tênis") return "src/assets/images/Tenis.jpg";
  if (productTitle === "Sapato") return "src/assets/images/Sapato.jpg";
  if (productTitle === "Bola") return "src/assets/images/Bola.jpg";
  if (productTitle === "Mochila") return "src/assets/images/Mochila.jpg";
  if (productTitle === "Headset") return "src/assets/images/Headset.jpg";
  if (productTitle === "Martelo") return "src/assets/images/Martelo.jpg";
  if (productTitle === "Caneca") return "src/assets/images/Caneca.jpg";
  if (productTitle === "Quadro") return "src/assets/images/Quadro.jpg";
  if (productTitle === "Tuba") return "src/assets/images/Tuba.jpg";
  if (productTitle === "Pratos") return "src/assets/images/Pratos.jpg";

  return "src/assets/images/Unknow.jpg";
};
