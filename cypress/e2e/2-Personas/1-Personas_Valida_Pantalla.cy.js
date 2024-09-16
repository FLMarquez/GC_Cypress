import ProyectoDos_Personas_Po from '../../support/pageObjects/2-proyectoDos_PO/proyectoDos_Personas_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Valida_Pantalla', () => {

    const master=new ProyectoDos_Personas_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Validar_Pantalla_Personas', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("20263428340",100)  
    master.SeccionTres(100)   
       
});

});