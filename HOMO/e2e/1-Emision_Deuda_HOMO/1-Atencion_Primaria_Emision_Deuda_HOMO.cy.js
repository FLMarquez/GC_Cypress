//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoUno_Emision_Deuda_ATPrimaria_HOMO_Po from '../../support/pageObjects/1-Emision_Deuda_HOMO_PO/proyectoUno_Emision_Deuda_ATPrimaria_HOMO_PO.cy.js'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Atencion_Primaria_Emision_Deuda', () => {

    const master=new ProyectoUno_Emision_Deuda_ATPrimaria_HOMO_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Atencion Primaria Emision de Deuda', () => {        
  master.SeccionUno("jdominguez","jdominguez","K2B Homologación",100) 
    master.SeccionDos("50350",100) 
    master.SeccionTres(100)  
       
});

});