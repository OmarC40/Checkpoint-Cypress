/// <reference types="cypress" />

//barra='img[alt="Google"] ';
//Es lo pirmero que pondremos para inicar nuestra test suite
describe('Test Suite',()=>{

    describe('Seccion adentro de la suite',()=>{

        beforeEach('login',()=>{

        })

        it('primera prueba',()=>{
            //aqui se pone el codigo que remos
        })
        it('segunda prueba',()=>{
            //aqui se pone el codigo que remos
        })
        it('tercera prueba',()=>{
            //aqui se pone el codigo que remos
        })
        it('cuarta prueba',()=>{
            //aqui se pone el codigo que remos
        })
    })

    it('primera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('segunda prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('tercera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('cuarta prueba',()=>{
        //aqui se pone el codigo que remos
    })
})

describe('Test Suite',()=>{
    it('primera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('segunda prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('tercera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('cuarta prueba',()=>{
        //aqui se pone el codigo que remos
    })
})


// final video Test Structure


describe('Test Suite',()=>{
    it('primera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('segunda prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('tercera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('cuarta prueba',()=>{
        //aqui se pone el codigo que remos
    })
})

describe('Test Suite',()=>{
    it('primera prueba',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //tag

        cy.get('input')

        //id

        cy.get('#inputEmail1')

        //class

        cy.get('.input-full-width')
        
        //atributo

        cy.get('[fullwidth]')

        // atributoi y su valor 

        cy.get('[placeholder="Email"]')
        

        // por toda la clase 

        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // por 2 atributos debe ser sin espacios los atributos

        cy.get('[placeholder="Email"][class="input-full-width size-medium shape-rectangle"]')
    })

    it('segunda prueba',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('Sign in')
        cy.contains( '[status="warning"]','Sign in')
        cy.get('[status="warning"]button')



        //const nbcardHorizontalForm=cy.contains('nb-card','Horizontal form');

        //en teoria esto no es valido ya que no se puede asignar de esta
        //forma sin ambargo nos funciono vamos a hacerlo de la manera correcta
        /*
        nbcardHorizontalForm.find('button')
        nbcardHorizontalForm.contains('Sign in')
        */
        
        cy.contains('nb-card','Horizontal form').as('nbcardHorizontalForm')

        cy.get('@nbcardHorizontalForm').find('button')
        cy.get('@nbcardHorizontalForm').contains('Sign in')

        //se supone que no deberiamos asignar variables para en esta parte por lo que 
        //la forma que recomienda es hacerlo de la manera que lo harias con cypress con el
        //.as al usar esto usas .get con una @ y el nombre con el que lo guardaste

        cy.contains('nb-card','Horizontal form').get('button')

        cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in').parents('form').find('nb-checkbox').click()



    })

    it('subject command',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('label[for="inputEmail1"]').should('contain','Email')
        cy.get('label[for="inputPassword2"]').should('contain','Password')


        cy.get('label[for="exampleInputEmail1"]').invoke('attr','class').then(classValue =>{
            expect(classValue).to.equal('label')
        })

        cy.get('[id="exampleInputEmail1"]').type('test@test.com')
        cy.get('[id="exampleInputEmail1"]').invoke('prop','value').should('contain','test@test.com')
    })


    it('selector',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons =>{
            cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
            cy.wrap(radioButtons).eq(1).check({force: true})
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(0).should('be.disabled')
        })
    })

    it('checkbox',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').uncheck({force:true})
        cy.get('[type="checkbox"]').eq(0).click({force:true})
        cy.get('[type="checkbox"]').eq(1).click({force:true})
        })


    it('Date picker',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        
        cy.get('input[placeholder="Form Picker"]').as('DatePick')

        let date=new Date();
        date.setDate(date.getDate()+90);
        let futureDay= date.getDate()
        let futureMonth= date.toLocaleDateString('en-US',{month:'short'}).slice(0, 3);
        console.log(futureMonth)
        let futureYear= date.getFullYear()
        let dateToAssert=`${futureMonth} ${futureDay}, ${futureYear}`
        

        cy.get('@DatePick').click()

        cy.get('nb-calendar-pageable-navigation').invoke('attr','ng-reflect-date').as('calendarMonthYear')
        
        function selectDayFromCurrent() {
            cy.get('@calendarMonthYear').then((calendarMonthYear)=>{
                if (!calendarMonthYear.includes(futureMonth)||!calendarMonthYear.includes(futureYear)){
                    cy.get('[ng-reflect-icon="chevron-right-outline"]').click()
                    selectDayFromCurrent()
                }else{
                    cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                }
            })
            
        }
        selectDayFromCurrent()
        cy.get('@DatePick').invoke('prop','value').should('contain',dateToAssert)
        cy.get('@DatePick').should('have.value',dateToAssert)
        })
        


        it('Lists & dropdowns',()=>{
            cy.visit('/')
            /*
            cy.get('[ng-reflect-klass="select-button"]').click()
            cy.get('[class="options-list"]').as('Lista')
            cy.get('@Lista').contains('Dark').click()
            cy.get('[ng-reflect-klass="select-button"]').should('contain','Dark')
            */


            cy.get('[ng-reflect-klass="select-button"]').as('Dropdown').click()
            cy.get('[class="options-list"]').as('Lista')
            cy.get('@Lista').find('nb-option').each(listitems=>{
                const itemstext=listitems.text().trim()
                cy.wrap(listitems).click()
                cy.get('@Dropdown').should('contain',itemstext)
                cy.get('@Dropdown').click()
            })
        })


        it('Tables',()=>{
            cy.visit('/')
            cy.get('[title="Tables & Data"]').click()
            cy.contains('Smart Table').click()
            cy.get('tbody').contains('tr','Larry').then(tablerow=>{
                cy.wrap(tablerow).find('.nb-edit').click()
                cy.wrap(tablerow).find('[placeholder="Age"]').clear().type('35')
                cy.wrap(tablerow).find('.nb-checkmark').click()
                cy.wrap(tablerow).find('td').eq(6).should('contain','35')

            })
            ///SABADO
            cy.get('tHead').find('.nb-plus').click()
            cy.get('thead').find('tr').eq(2).then(tablerow=>{
                cy.wrap(tablerow).find('[placeholder="First Name"]').type("John")
                cy.wrap(tablerow).find('[placeholder="Last Name"]').type("Smith")
                cy.wrap(tablerow).find('[class="nb-checkmark"]').click()
            })
            
            cy.get('tbody tr').first().find('td').then(tablerowassert=>{
                cy.wrap(tablerowassert).eq(2).should('contain','John')
                cy.wrap(tablerowassert).eq(3).should('contain','Smith')

            })
            //
            const age=[20,30,40,200]
            cy.wrap(age).each(age=>{
                cy.get('thead [placeholder="Age"]').clear().type(age)
                cy.wait(500)
                cy.get('tbody tr').each(ageval=>{
                    if (age==200) {
                        cy.get('tbody tr td').should('contain','No data found')  
                    } else {
                        cy.wrap(ageval).find('td').eq(6).should('contain',age)
                    }
            })

            })
            

            //cy.get('thead [placeholder="Age"]').clear().type('200')
            //cy.get('tbody tr td').should('contain','No data found')

          

              
        })


        it.only('Popups & Tooltips',()=>{
            cy.visit('/')
            cy.contains('Modal & Overlays').click()
            cy.contains('Tooltip').click()

            cy.contains('nb-card','Colored Tooltips')
            .contains('Default').click()
            cy.get('nb-tooltip').should('contain','This is a tooltip')
        })


    
    
})