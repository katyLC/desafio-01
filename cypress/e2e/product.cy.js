
//const Cypress  = require("cypress");
//<reference  types='cypress'>

import {LoginPage} from "../support/loginPage";
import {CreateProductPage} from "../support/createProductPage";
import {DeleteProductPage} from "../support/deleteProductPage";

describe('Online Shop',()=>{
let loginData;
let productData;
const loginPage = new LoginPage()
    const createProductPage = new CreateProductPage()
    const deleteProductPage = new DeleteProductPage()
 before('Obtener datos del login',()=>{
     cy.fixture('data').then((data)=>{
         loginData = data.login;
         productData = data.newProduct;
     })
 })

    beforeEach('Go login', ()=>{
        cy.visit('/')
        cy.get('[data-cy="registertoggle"]').dblclick();
    })

    it("Add product and delete ",()=>{
        loginPage.Login(loginData.user, loginData.password);
        createProductPage.clickOnlineShop.click()
        createProductPage.inputAddProduct.click()
        createProductPage.createProduct(productData.name, productData.price ,productData.image, productData.id);
        cy.get('header').then($header =>{
            if($header.length > 0){
                cy.get('p').should('contain', `${productData.name} has been added`)
                cy.get('#closeModal').click()
                deleteProductPage.selectTypeSearch.select('id')
                deleteProductPage.selectSearchProduct.type(productData.id)
                deleteProductPage.selectSearchProduct.type('{enter}')
                cy.get('p').should("contain",'Blazer')
                cy.get('[data-cy="delete-200"]').click()
                cy.get("#saveEdit").click()
                cy.get('#closeModal').click()
                cy.wait(1000)
                deleteProductPage.selectSearchProduct.clear()
                deleteProductPage.selectSearchProduct.type(productData.id)
                deleteProductPage.selectSearchProduct.type('{enter}')
                cy.wait(1000)
                cy.get('').should('not.exist', 'Blazer')
            } else {
                deleteProductPage.selectTypeSearch.select('id')
                deleteProductPage.selectSearchProduct.type(productData.id)
                deleteProductPage.selectSearchProduct.type('{enter}')
                cy.get('p').should("contain",'Blazer')
                cy.get('[data-cy="delete-200"]').click()
                cy.get("#saveEdit").click()
                cy.get('#closeModal').click()
                cy.wait(1000)
                deleteProductPage.selectSearchProduct.clear()
                deleteProductPage.selectSearchProduct.type(productData.id)
                deleteProductPage.selectSearchProduct.type('{enter}')
                cy.wait(1000)
                cy.get('').should('not.exist', 'Blazer')
            }

        })



    })
})