import i18next from "../../components/i18next/index.js";

export const resources = {
  en: {
    translation: {
      header: {
        preTitle: 'A selection of products',
        title: 'Special for you',
        subtitle: 'All the products of this list were selected by your navigation. Enjoy!'
      },
      menu: {
        about: 'Know Linx',
        helpAlgorithm: 'Help the algorithm',
        customerProducts: 'Your products',
        share: 'Share'
      },
      products: {
        sectionTitle: "Your special selection",
        btnMoreProducts: {
          loading: "Loading...",
          ready: "More products here!"
        },
        btnBuyProduct: "Buy"
      },
      newsletter: {
        sectionTitle: 'Share the news',
        sectionSubTitle: 'Do you want your friends to also get their personalized list? Fill it out now!',
        form: {
          name: 'Your friends name',
          email: 'E-mail',
          btnText: {
            loading: "Sending...",
            standby: "Send now"
          }
        }
      },
      footer: {
        msg: 'Testing your skills about HTML, CSS e JS. <br> Linx Impulse <br> 2019'
      },
      alert: {
        validations: {
          tooShortName: 'Please type a name with more than 2 letters',
          invalidEmail: ''
        },
        feedbacks: {
          succefullSentEmail: 'Success, your e-mail was sent!'
        }
      },
      currency: 'USD'
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
      },
      products: {
        sectionTitle: "Sua seleção especial",
        btnMoreProducts: {
          loading: "Carregando...",
          ready: "Ainda mais produtos aqui!"
        },
        btnBuyProduct: "Comprar"
      },
      newsletter: {
        sectionTitle: 'Compartilhe a novidade',
        sectionSubTitle: 'Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!',
        form: {
          name: 'Nome do seu amigo:',
          email: 'Email',
          btnText: {
            loading: "Enviando...",
            standby: "Enviar agora"
          }
        }
      },
      footer: {
        msg: 'Testando suas habilidades em HTML, CSS e JS. <br> Linx Impulse <br> 2019'
      },
      alert: {
        validations: {
          tooShortName: 'Por favor digite um nome com mais de 2 letras',
          invalidEmail: 'Por favor, digite um email válido',
        },
        feedbacks: {
          succefullSentEmail: 'Sucesso, seu email foi enviado!'
        }
      },
      currency: 'BRL'
    },
  },
};

i18next.init({
  fallbackLng: ['pt', 'en'],
  debug: true,
  resources,
});
