import ProductEl from "./productEl.js";
import { generateProductPage } from "./productGenerator.js";
import { resources } from "./i18n/index.js";
import i18next from "../../components/i18next/index.js";

class App {
  /**
   * Constructor getting the references from the DOM
   */
  constructor() {
    this.pageNumber = 1;

    this.formEl = document.getElementById("news-form");
    this.nameEl = document.querySelector("input[name=name]");
    this.emailEl = document.querySelector("input[name=email]");
    this.gridEl = document.getElementById("product-grid");
    this.moreBtn = document.getElementById("btn-more-products");
    this.submitBtn = document.querySelector("button[type=submit]");
    this.langSelector = document.querySelector(".lang-selector");

    this.registerHandlers();
    this.loadProducts();
    this.initLanguages();
    this.populateI18n();
  }

  /**
   * Function to register page events
   */
  registerHandlers() {
    this.formEl.onsubmit = (event) => this.submitNews(event);
    this.moreBtn.onclick = () => this.loadProducts();
    this.langSelector.addEventListener('change', (event) => this.changeLanguage(event));
  }

  /**
   * Function to submit newsletter form
   *
   * @param {event} obrigatory obrigatory parameter to prevent submit
   */
  submitNews(event) {
    event.preventDefault();
    this.submitBtn.innerHTML = "Enviando...";
    if (
      this.validateName(this.nameEl.value) &&
      this.validateEmail(this.emailEl.value)
    ) {
      alert("Sucesso, seu email foi enviado!");
    }
    this.submitBtn.innerHTML = "Enviar agora";
  }

  /**
   * Function to validate if email is valid through regex
   *
   * @param {String} obrigatory obrigatory parameter to be validated
   * @returns {boolean}
   */
  validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("Por favor, digite um email válido.");
    return false;
  }

  /**
   * Function to validate if name is valid, having more than 2 letters
   *
   * @param {String} obrigatory obrigatory parameter to be validated
   * @returns {boolean}
   */
  validateName(name) {
    if (name.length > 2) {
      return true;
    }
    alert("Por favor digite um nome com mais de 2 letras.");
    return false;
  }

  /**
   * Function to get product list by page and send to render
   */
  async loadProducts() {
    this.moreBtn.innerHTML = "Carregando...";
    const response = generateProductPage(this.pageNumber);
    const products = response;
    this.render(products);
    this.pageNumber++;
    this.moreBtn.innerHTML = "Ainda mais produtos aqui!";
  }

  changeLanguage(event) {
    i18next.changeLanguage(event.target.value);
    this.populateI18n();
  }

  initLanguages() {
    const languages = Object.keys(resources);
    languages.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang;
      option.innerHTML = lang;
      option.classList.add(`language-${lang}`);
      this.langSelector.appendChild(option);

      if (lang === 'pt') {
        option.selected = true;
      }
    });
  }

  populateI18n() {
    this.i18nHeader();
    this.i18nMenu();
  }

  i18nHeader() {
    let header_pre_title = document.getElementById("pre-title");
    header_pre_title.innerText = i18next.t('header.preTitle');

    let header_title = document.getElementById("title");
    header_title.innerText = i18next.t('header.title');

    let header_subtitle = document.getElementById("subtitle");
    header_subtitle.innerText = i18next.t("header.subtitle");
  }

  i18nMenu() {
    document.querySelector("#menu-container #about").innerText = i18next.t("menu.about");
    document.querySelector("#menu-container #help-algorithm").innerText = i18next.t("menu.helpAlgorithm");
    document.querySelector("#menu-container #customer-products").innerText = i18next.t("menu.customerProducts");
    document.querySelector("#menu-container #share").innerText = i18next.t("menu.share");
  }

  /**
   * Function to render the product list in the page
   *
   * @param {array} obrigatory a product array to be rendered in the grid
   */
  render(productList) {
    productList.forEach((product) => {
      const productEl = new ProductEl(product);

      this.gridEl.appendChild(productEl);
    });
  }
}

new App();
