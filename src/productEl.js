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
                                <div class="product-description" data-value="${description}"></div>
                                <div class="product-old-price" data-value="${oldPrice}"></div>
                                <div class="product-price" data-value="${price}"></div>
                                <div class="product-price-split" data-split-value="${value}" data-split-times="${count}"></div>
                                <div class="button buy-button"></div>
                            </div>`;
    div.innerHTML = html;
    return div;
  }
}

export default ProductEl;
