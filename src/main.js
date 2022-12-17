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
    this.langSelector.addEventListener("change", (event) =>
      this.changeLanguage(event)
    );
  }

  /**
   * Function to submit newsletter form
   *
   * @param {event} obrigatory obrigatory parameter to prevent submit
   */
  submitNews(event) {
    event.preventDefault();
    this.submitBtn.innerHTML = i18next.t("newsletter.form.btnText.loading");
    if (
      this.validateName(this.nameEl.value) &&
      this.validateEmail(this.emailEl.value)
    ) {
      alert(i18next.t("alert.feedbacks.succefullSentEmail"));
    }
    this.submitBtn.innerHTML = i18next.t("newsletter.form.btnText.standby");
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
    alert(i18next.t("alert.validations.invalidEmail"));
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
    alert(i18next.t("alert.validations.tooShortName"));
    return false;
  }

  /**
   * Function to get product list by page and send to render
   */
  async loadProducts() {
    this.moreBtn.innerHTML = i18next.t("products.btnMoreProducts.loading");
    const response = generateProductPage(this.pageNumber);
    const products = response;
    this.render(products);
    this.pageNumber++;
    this.moreBtn.innerHTML = i18next.t("products.btnMoreProducts.ready");
  }

  changeLanguage({ target: { value } }) {
    i18next.changeLanguage(value);
    localStorage.setItem("language", value);
    this.populateI18n(value);
  }

  initLanguages() {
    const languages = Object.keys(resources);
    languages.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang;
      option.innerHTML = lang;
      option.classList.add(`language-${lang}`);
      if (localStorage.getItem("language") === lang) {
        option.selected = true;
      }
      this.langSelector.appendChild(option);
    });
  }

  populateI18n(lang) {
    if (!lang) lang = localStorage.getItem("language");
    this.i18nHeader();
    this.i18nMenu();
    this.i18nProductsSection();
    this.i18nNewsletter();
    this.i18nFooter();
    this.i18nProductInfo(lang);
    this.i18nDate(lang);
  }

  i18nHeader() {
    document.getElementById("pre-title").innerText =
      i18next.t("header.preTitle");
    document.getElementById("title").innerText = i18next.t("header.title");
    document.getElementById("subtitle").innerText =
      i18next.t("header.subtitle");
  }

  i18nMenu() {
    document.querySelector("#menu-container #about").innerText =
      i18next.t("menu.about");
    document.querySelector("#menu-container #help-algorithm").innerText =
      i18next.t("menu.helpAlgorithm");
    document.querySelector("#menu-container #customer-products").innerText =
      i18next.t("menu.customerProducts");
    document.querySelector("#menu-container #share").innerText =
      i18next.t("menu.share");
  }

  i18nProductsSection() {
    document.querySelector("#products .section-title").innerHTML = i18next.t(
      "products.sectionTitle"
    );
    document.querySelector("#products #btn-more-products").innerHTML =
      i18next.t("products.btnMoreProducts.ready");
  }

  i18nNewsletter() {
    document.querySelector("#newsletter .section-title").innerHTML = i18next.t(
      "newsletter.sectionTitle"
    );
    document.querySelector("#newsletter .section-subtitle").innerHTML =
      i18next.t("newsletter.sectionSubTitle");
    document.querySelector("#newsletter #news-form #name").innerHTML =
      i18next.t("newsletter.form.name");
    document.querySelector("#newsletter #news-form #email").innerHTML =
      i18next.t("newsletter.form.email");
    document.querySelector("#newsletter #news-form .button").innerHTML =
      i18next.t("newsletter.form.btnText.standby");
  }

  i18nFooter() {
    document.querySelector("#footer #footer-text").innerHTML =
      i18next.t("footer.msg");
  }

  i18nProductInfo(lang) {
    NodeList.prototype.forEach = Array.prototype.forEach;

    let buyBtns = document.querySelectorAll(".buy-button");
    buyBtns.forEach((element) => {
      element.innerHTML = i18next.t("products.btnBuyProduct");
    });

    const currency = i18next.t("currency");
    let prices = document.querySelectorAll(".product-price");
    prices.forEach((element) => {
      const value = element.dataset.value;
      const formatted_price = Intl.NumberFormat(lang, {
        style: "currency",
        currency,
      }).format(value);
      element.innerText = i18next.t("products.price") + formatted_price;
    });

    let old_prices = document.querySelectorAll(".product-old-price");
    old_prices.forEach((element) => {
      const value = element.dataset.value;
      const formatted_price = Intl.NumberFormat(lang, {
        style: "currency",
        currency,
      }).format(value);
      element.innerText = i18next.t("products.oldPrice") + formatted_price;
    });

    let description = document.querySelectorAll(".product-description");
    description.forEach((element) => {
      const value = element.dataset.value;
      element.innerText = i18next.t("products.description", { count: value });
    });

    let split_value = document.querySelectorAll(".product-price-split");
    split_value.forEach((element) => {
      const value = element.dataset.splitValue;
      const times = element.dataset.splitTimes;
      const formatted_price = Intl.NumberFormat(lang, {
        style: "currency",
        currency,
      }).format(value);
      element.innerText = `${times}x ${value}`;
    });
  }

  i18nDate(lang) {
    const current_date = Date.now();
    const formatted_date = new Intl.DateTimeFormat(lang).format(current_date);
    document.querySelector("#date").innerHTML = formatted_date;
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
    this.populateI18n();
  }
}

new App();
