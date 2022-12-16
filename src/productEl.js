import { t } from "../../components/i18next/index.js";

class ProductEl {
  /**
   * Constructor of the product element
   *
   * @param {product} obrigatory product to have a template
   * @returns {html} returns a div with the product card
   */
  constructor(product) {
    let {
      image,
      name,
      description,
      oldPrice,
      price,
      installments: { count, value },
    } = product;

    value = value.toFixed(2).replace(".", ",");

    const div = document.createElement("div");
    div.className = "product-card-container col-xs-3";
    const html = `<div class="product-card">
                                <div class="product-img-container">
                                    <img class="product-image"
                                        src="http:${image}"></img>
                                </div>
                                <div class="product-title">${name}</div>
                                <div class="product-description">${description}</div>
                                <div class="product-old-price">De: R$${oldPrice},00</div>
                                <div class="product-price">Por: R$${price},00</div>
                                <div class="product-price-split">ou ${count}x de R$${value}</div>
                                <div class="button buy-button">${t("buy")}</div>
                            </div>`;
    div.innerHTML = html;
    return div;
  }
}

export default ProductEl;
