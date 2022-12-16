import i18next from "../../components/i18next/index.js";

export const resources = {
  en: {
    translation: {
      key: "hello world",
    },
  },
  es: {
    translation: {
      key: "hello world",
    },
  },
  pt: {
    translation: {
      key: "hello world",
    },
  },
};

i18next.init({
  lng: "en",
  debug: true,
  resources,
});
