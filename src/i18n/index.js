import i18next from "../../components/i18next/index.js";

export const resources = {
  en: {
    translation: {
      buy: "Buy",
    },
  },
  es: {
    translation: {
      buy: "Compra",
    },
  },
  pt: {
    translation: {
      buy: "Comprar",
    },
  },
};

i18next.init({
  lng: localStorage.getItem("language") || "en",
  debug: true,
  resources,
});
