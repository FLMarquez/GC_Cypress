//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoCuatro_Emision_Deuda_Consulta_de_Comprobantes_Po from '../../support/pageObjects/4-proyectoCuatro_PO/proyectoCuatro_Emision_Deuda_Consulta_de_Comprobantes_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Consulta de Comprobantes', () => {

    const master=new ProyectoCuatro_Emision_Deuda_Consulta_de_Comprobantes_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Consulta de Comprobantes', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("12714",100) 
    master.SeccionTres(100)  
    master.SeccionCuatro(100)
       
});

});