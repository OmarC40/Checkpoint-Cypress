import { loginPage } from "../support/page_objects/loginpage"

describe('Validate Login page', () => {
  
  beforeEach('login',()=>{
    cy.visit('https://demoqa.com/login')
  })
  
  it('Login Page Elements',()=>{
    loginPage.LoginPageElements();
  })

  it('Login success', () => {
    const userName = 'Test400';
    loginPage.WelcomeLabel()
    loginPage.Username(userName)
    loginPage.Password('Test4*00')
    loginPage.LoginBtn()
    loginPage.UsernameValue(userName)
  })

  it('Login fail', () => {
    loginPage.WelcomeLabel()
    loginPage.Username('Test400')
    loginPage.Password('Test4*002')
    loginPage.LoginBtn()
  })

  it('New user Form Elements Validation',()=>{
    loginPage.NewUsaerButton()
  })


})

describe('Validate loding page', () => {

  it('Login page response',()=>{
    cy.intercept('GET', 'https://buttons.github.io/buttons.js').as('loadWait');
    cy.visit('http://uitestingplayground.com/loaddelay')
    cy.wait('@loadWait').its('response.statusCode').should('eq', 200)
    cy.get('[type="button"]').should('be.visible')



  })

})

describe('Session Test ', () => {
  beforeEach('login',()=>{
    cy.session('userSession', () => {
      cy.visit('https://demoqa.com/login')
      const userName = 'Test400';
      loginPage.Username(userName)
      loginPage.Password('Test4*00')
      loginPage.LoginBtn()
      cy.url().should('include', '/profile');
    });
  })


  it('Access profile directly', () => {
     
      cy.visit('https://demoqa.com/profile');
     
  });

  



});


describe('Validate Api', () => {

  it('Intercep Links', () => {
    cy.intercept('GET', 'https://demoqa.com/created').as('Created');
    cy.visit('https://demoqa.com/links');
    cy.get('[id="created"]').click()
    cy.wait('@Created').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      expect(interception.response.statusMessage).to.eq('Created');
  });

   
});


})
