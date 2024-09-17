export class LoginPage{
    LoginPageElements(){
        cy.get('[id="userForm"]').then(loginform=>{
            cy.wrap(loginform).find('h2').contains('Welcome,')
            cy.wrap(loginform).find('h5').contains('Login in Book Store')

            cy.wrap(loginform).find('[id="userName-label"]')
            cy.wrap(loginform).find('[placeholder="UserName"]')
            cy.wrap(loginform).find('[id="password-label"]')
            cy.wrap(loginform).find('[placeholder="Password"]')
            cy.wrap(loginform).find('button[id="login"]')
            cy.wrap(loginform).find('button[id="newUser"]')
        })
    }
    
    WelcomeLabel(){
        cy.get('[id="userForm"] h2').should('contain','Welcome,')
    }

    Username(user){
        cy.get('[id="userForm"] [placeholder="UserName"]').then(username=>{
            cy.wrap(username).click()
            cy.wrap(username).type(user)
        })
        
    }

    Password(pass){
        cy.get('[id="userForm"] [placeholder="Password"]').then(password=>{
            cy.wrap(password).click()
            cy.wrap(password).type(pass)
        })
       
    }

    LoginBtn(){
        cy.get('[id="userForm"] [id="login"]').then(loginbtn=>{
            cy.wrap(loginbtn).click()
            cy.wait(2000)
            cy.url().then(url=>{
                if (url.includes('/profile')) {
                    cy.get('[id="userName-value"]').should('be.visible')
                
                }else{
                    cy.get('[id="userForm"] [id="name"]').contains('Invalid username or password!')
                }
            })
            
        })
        
    }

    NewUsaerButton(){
        cy.get('[id="userForm"] [id="newUser"]').then(newuser=>{
            cy.wrap(newuser).click()
            cy.get('[id="userForm"]').then(userformelements=>{
                cy.wrap(userformelements).find('[id="firstname-label"]')
                cy.wrap(userformelements).find('[placeholder="First Name"]')
                cy.wrap(userformelements).find('[id="lastname-label"]')
                cy.wrap(userformelements).find('[placeholder="Last Name"]')
                cy.wrap(userformelements).find('[id="userName-label"]')
                cy.wrap(userformelements).find('[placeholder="UserName"]')
                cy.wrap(userformelements).find('[id="password-label"]')
                cy.wrap(userformelements).find('[placeholder="Password"]')

            })
        })
        
    }

    MainHeaderLogin(){
        cy.get('[src="/images/Toolsqa.jpg"]')
        
    }

    UsernameValue(user){
        cy.get('#userName-value').contains(user)
    }


    


}

export const loginPage = new LoginPage()