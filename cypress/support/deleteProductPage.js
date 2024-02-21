

export class DeleteProductPage{

    constructor() {
        this.typeSearch= '[data-cy="search-type"]'
        this.searchProduct = '[data-cy="search-bar"]'

    }

    get selectTypeSearch(){
        return cy.get(this.typeSearch)
    }

    get selectSearchProduct(){

        return cy.get(this.searchProduct)
    }
}