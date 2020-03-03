class ProductEl {
    constructor(product) {
        const { image, name, description, oldPrice, price, installments: { count, value } } = product

        const div = document.createElement('div')
        div.className = "product-card-container col-xs-3"
        const html = `<div class="product-card">
                                <div class="product-img-container">
                                    <img class="product-image"
                                        src="${image}"></img>
                                </div>
                                <div class="product-title">${name}</div>
                                <div class="product-description">${description}</div>
                                <div class="product-old-price">De: R$${oldPrice},00</div>
                                <div class="product-price">Por: R$${price},00</div>
                                <div class="product-price-split">${count}${value}</div>
                                <div class="button buy-button">Comprar</div>
                            </div>`
        div.innerHTML = html
        return div
    }
}

export default ProductEl