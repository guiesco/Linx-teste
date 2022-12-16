import i18next from "../../components/i18next/index.js";

export const resources = {
  en: {
    translation: {
      header: {
        preTitle: 'A selection of products',
        title: 'Especial for you',
        subtitle: 'All the products of this list were selected by your navigation. Enjoy!'
      },
      menu: {
        about: 'Know Linx',
        helpAlgorithm: 'Help the algorithm',
        customerProducts: 'Your products',
        share: 'Share'
      }
    },
  },
  pt: {
    translation: {
      header: {
        preTitle: 'Uma seleção de produtos',
        title: 'Especial para você',
        subtitle: 'Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!'
      },
      menu: {
        about: 'Conheça a Linx',
        helpAlgorithm: 'Ajude o algoritimo',
        customerProducts: 'Seus produtos',
        share: 'Compartilhe'
      }
    },
  },
};

i18next.init({
  fallbackLng: ['pt', 'en'],
  debug: true,
  resources,
});
