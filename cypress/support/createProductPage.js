export class CreateProductPage {

    constructor() {
        this.onlineShop= '[data-cy="onlineshoplink"]'
        this.addProdut =  '[data-cy="add-product"]'
        this.nameProduct ='[data-cy="productName"]'
        this.productPrice ='[data-cy="productPrice"]'
        this.productImage ='[data-cy="productCard"]'
        this.productID = '[data-cy="productID"]'
        this.createProductButton = '[data-cy="createProduct"]'
    }
    get clickOnlineShop(){

        return cy.get(this.onlineShop)
    }

    get inputAddProduct(){

        return cy.get(this.addProdut)
    }

    get inputNameProduct(){
        return cy.get(this.nameProduct)
    }

    get inputProductPrice(){

        return cy.get(this.productPrice)
    }

    get inputProductImage(){
         return  cy.get(this.productImage)
    }

    get inputProductID(){

        return cy.get(this.productID)
    }

    get  buttonCreateProduct(){
        return cy.get(this.createProductButton)
    }

    fillNameProduct(nameProduct){
        return this.inputNameProduct.type(nameProduct)
    }

    createProduct(nameProduct,productPrice, productImage, productID){
        this.fillNameProduct(nameProduct)
        this.inputProductPrice.type(productPrice)
        this.inputProductImage.type(productImage)
        this.inputProductID.type(productID)
        this.buttonCreateProduct.click()
    }

}