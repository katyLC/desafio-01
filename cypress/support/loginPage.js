
export  class LoginPage{

    constructor() {
        this.user ='[data-cy="user"]';
        this.password= '[data-cy="pass"]';
        this.loginIn= '[data-cy="submitForm"]'
    }
    get userInput(){
       return  cy.get(this.user)
    }
    get passwordInput(){
        return cy.get(this.password)
    }
    get buttonLoginIn(){
        return cy.get(this.loginIn)
    }

    fillUserInput(user){
        return this.userInput.type(user)
    }

    fillPasswordInput(password){
        return this.passwordInput.type(password)
    }

    Login(user,password){
        this.fillUserInput(user)
        this.fillPasswordInput(password)
        this.buttonLoginIn.click()
    }



}