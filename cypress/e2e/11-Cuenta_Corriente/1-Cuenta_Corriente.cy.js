//Ientificacion Tirbutaria: 20263428340
//Objeto: 50350

import ProyectoNueve_Cuenta_Corriente_Po from '../../support/pageObjects/11-proyectoNueve_PO/proyectoNueve_Cuenta_Corriente_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Cuenta_Corriente', () => {

    const master=new ProyectoNueve_Cuenta_Corriente_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Cuenta_Corriente', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("20263428340",100)  
    master.SeccionTres(100) 
       
});

});