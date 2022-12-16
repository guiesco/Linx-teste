export const generateProductPage = (page) => {
  const response = [];
  const pageVal = page * 8;
  for (let i = 0 + pageVal; i < 8 + pageVal; i++) {
    response.push(productModel(i));
  }
  return response;
};

const productModel = (i) => {
  return {
    id: i,
    name: `Product Number ${i}`,
    image: `//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=${
      photoIds[i % 5]
    }`,
    oldPrice: productSample[i % 8].oldPrice,
    price: productSample[i % 8].price,
    description: `Product long description number ${i} just to make more than one like of text.`,
    installments: {
      count: productSample[i % 8].installments.count,
      value: productSample[i % 8].installments.value,
    },
  };
};

const photoIds = [6124117, 6829307, 6624363, 5783178, 6829158];

const productSample = [
  {
    id: 0,
    name: "Product Number 0",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363",
    oldPrice: 121,
    price: 91,
    description:
      "Product long description number 0 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 9.1,
    },
  },
  {
    id: 1,
    name: "Product Number 1",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158",
    oldPrice: 334,
    price: 305,
    description:
      "Product long description number 1 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 30.5,
    },
  },
  {
    id: 2,
    name: "Product Number 2",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6124117",
    oldPrice: 363,
    price: 319,
    description:
      "Product long description number 2 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 31.9,
    },
  },
  {
    id: 3,
    name: "Product Number 3",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307",
    oldPrice: 279,
    price: 264,
    description:
      "Product long description number 3 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 26.4,
    },
  },
  {
    id: 4,
    name: "Product Number 4",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363",
    oldPrice: 235,
    price: 211,
    description:
      "Product long description number 4 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 21.1,
    },
  },
  {
    id: 5,
    name: "Product Number 5",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158",
    oldPrice: 150,
    price: 130,
    description:
      "Product long description number 5 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 13,
    },
  },
  {
    id: 6,
    name: "Product Number 6",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178",
    oldPrice: 320,
    price: 281,
    description:
      "Product long description number 6 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 28.1,
    },
  },
  {
    id: 7,
    name: "Product Number 7",
    image:
      "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158",
    oldPrice: 295,
    price: 246,
    description:
      "Product long description number 7 just to make more than one like of text.",
    installments: {
      count: 10,
      value: 24.6,
    },
  },
];
