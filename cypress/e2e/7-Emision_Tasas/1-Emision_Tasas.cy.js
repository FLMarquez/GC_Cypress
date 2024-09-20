//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoSiete_Emisione_Tasas_PO from '../../support/pageObjects/7-proyectoSiete_PO/proyectoSiete_Emision_Tasas_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Emision de Tasa', () => {

    const master=new ProyectoSiete_Emisione_Tasas_PO()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Emision de Tasa', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("20276701429","502104",1500) 
    master.SeccionTres(100)  
    master.SeccionCuatro(100) 
       
});

});