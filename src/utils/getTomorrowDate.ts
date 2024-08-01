import { format, addDays, Locale } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importa a localidade em português do Brasil

export const getTomorrowDate = () => {
  const tomorrow = addDays(new Date(), 1); // Adiciona um dia à data atual
  return format(tomorrow, "EEEE, dd 'de' MMMM", { locale: ptBR }); // Formata a data para o formato desejado
};
