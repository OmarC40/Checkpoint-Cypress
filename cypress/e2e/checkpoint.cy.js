import { loginPage } from "../support/page_objects/loginpage"
const userName = 'Test400';
const passCorrect = 'Test4*00';
const passincorrect = 'Test4*002';
describe('USER STORY 1', () => {
  
  beforeEach('login',()=>{
    cy.visit('https://demoqa.com/login')
  })
  
  it('Login Page Elements',()=>{
    loginPage.LoginPageElements();
  })

  it('Login success', () => {
    loginPage.WelcomeLabel()
    loginPage.Username(userName)
    loginPage.Password(passCorrect)
    loginPage.LoginBtn()
    cy.url().should('include', '/profile');
    loginPage.UsernameValue(userName)
  })

  it('Login fail', () => {
    loginPage.WelcomeLabel()
    loginPage.Username(userName)
    loginPage.Password(passincorrect)
    loginPage.LoginBtn()
    loginPage.faillogin()
  })

  it('New user Form',()=>{
    loginPage.NewUsaerButton()
  })


})

describe('USER STORY 2', () => {

  it('Login page response',()=>{
    cy.intercept('GET', 'https://buttons.github.io/buttons.js').as('loadWait');
    cy.visit('http://uitestingplayground.com/loaddelay')
    cy.wait('@loadWait').its('response.statusCode').should('eq', 200)
    cy.get('[type="button"]').should('be.visible')



  })

})

describe('USER STORY 3 ', () => {
  beforeEach('login',()=>{
    cy.session('userSession', () => {
      cy.visit('https://demoqa.com/login')
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


describe('USER STORY 4', () => {

  it('Intercep Links', () => {
    cy.intercept('GET', 'https://demoqa.com/created').as('Created');
    cy.visit('https://demoqa.com/links');
    cy.get('[id="created"]').click()
    cy.wait('@Created').then((interception) => {
      cy.wrap(interception).its('response.statusCode').should('eq',201)
      cy.wrap(interception).its('response.statusMessage').should('eq','Created')
  });

   
});


})
