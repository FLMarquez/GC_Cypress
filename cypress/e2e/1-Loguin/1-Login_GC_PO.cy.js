import ProyectoUno_Loguin_Po from '../../support/pageObjects/1-proyectoUno_PO/proyectoUno_Loguin_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Login_GC', () => {

    const master=new ProyectoUno_Loguin_Po()
    
    master.visitHome()

Cypress.on('ubcaugth:exception', (err, runnable)=> {
    return false;
})

it('Usuario y Contraseña Válido', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100)  
    master.SeccionDos(1000)  
       
});

it('Usuario válido y contraseña no válida', () => {    
    master.SeccionUno("dsimoncini","dsimoncini1",100)
    cy.Validar_Campo("//div[@class='gx-warning-message'][contains(.,'Error en el usuario o contraseña')]", "Error en el usuario o contraseña","Contraseña")

});

it('Usuario no válido y contraseña válida', () => {    
    master.SeccionUno("dsimoncini1","dsimoncini",100)
    cy.Validar_Campo("//div[@class='gx-warning-message'][contains(.,'Error en el usuario o contraseña')]", "Error en el usuario o contraseña","Usuario")
});

it('Usuario no válido y contraseña no válida', () => {
    master.SeccionUno("dsimoncini1","dsimoncini1",100)
    cy.Validar_Campo("//div[@class='gx-warning-message'][contains(.,'Error en el usuario o contraseña')]", "Error en el usuario o contraseña","Contraseña")
    
});

it('Usuario vacio y contraseña válida', () => {    
    master.SeccionUno("","dsimoncini",100)
    cy.Validar_Campo("//div[@class='gx-warning-message'][contains(.,'Error en el usuario o contraseña')]", "Error en el usuario o contraseña","Usuario")
});

it('Usuario válido y contraseña vacía', () => { 
    master.SeccionUno("dsimoncini","",100)
    cy.Validar_Campo("//div[@class='gx-warning-message'][contains(.,'Error en el usuario o contraseña')]", "Error en el usuario o contraseña","Contraseña")
});


});


