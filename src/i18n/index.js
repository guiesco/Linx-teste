import i18next from "../../components/i18next/index.js";
import en from "./resources/en.json" assert { type: "json" };
import pt from "./resources/pt.json" assert { type: "json" };

export const resources = {
  en,
  pt,
};

i18next.init({
  lng: localStorage.getItem("language") || "en",
  debug: true,
  resources,
});
