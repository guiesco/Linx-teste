import axios from "axios"
import ProductEl from "./productEl"

class App {

    constructor() {
        this.pageNumber = 1

        this.formEl = document.getElementById('news-form')
        this.nameEl = document.querySelector('input[name=name]')
        this.emailEl = document.querySelector('input[name=email]')
        this.gridEl = document.getElementById('product-grid')
        this.moreBtn = document.getElementById('btn-more-products')
        this.submitBtn = document.querySelector('button[type=submit]')

        this.registerHandlers()
        this.loadProducts()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.submitNews(event)
        this.moreBtn.onclick = () => this.loadProducts()
    }

    submitNews(event) {
        event.preventDefault()
        this.submitBtn.innerHTML = "Enviando..."
        if (this.validateName(this.nameEl.value) && this.validateEmail(this.emailEl.value)) {
            alert("Sucesso, seu email foi enviado!")
        }
        this.submitBtn.innerHTML = "Enviar agora"
    }

    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        }
        alert("Por favor, digite um email válido.")
        return false
    }

    validateName(name) {
        if (name.length > 2) {
            return true
        }
        alert("Por favor digite um nome com mais de 2 letras.")
        return false
    }

    async loadProducts() {
        try {
            this.moreBtn.innerHTML = "Carregando..."
            const response = await axios.get(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${this.pageNumber}`)
            const { products } = response.data
            this.render(products)
            this.pageNumber++
        } catch (err) {
            console.warn('Não foi possível acessar a api')
        }
        this.moreBtn.innerHTML = "Ainda mais produtos aqui!"
    }

    render(productList) {
        productList.forEach(product => {
            const productEl = new ProductEl(product)

            this.gridEl.appendChild(productEl)
        })
    }
}

new App()