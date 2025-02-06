//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoCuatro_ConvertirPDF_JPG_Po from '../../support/pageObjects/4-proyectoCuatro_PO/proyectoCuatro_ConvertirPDF_JPG.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('ConvertirPDF_JPG', () => {

    const master=new ProyectoCuatro_ConvertirPDF_JPG_Po()
    
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
    master.SeccionUno(100) 
     
       
});

});