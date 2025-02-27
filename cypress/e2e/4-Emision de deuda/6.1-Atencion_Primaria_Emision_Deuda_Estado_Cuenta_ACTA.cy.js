//NumeroObjeto: Dato Prueba ----- A110865/2

import ProyectoCuatro_Emision_Deuda_ATPrimaria_Estado_Cuenta_ACTA_Po from '../../support/pageObjects/4-proyectoCuatro_PO/proyectoCuatro_Emision_Deuda_ATPrimaria_Estado_Cuenta_ACTA_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Atencion_Primaria_Emision_Deuda_Estado_Cuenta_ACTA', () => {

    const master=new ProyectoCuatro_Emision_Deuda_ATPrimaria_Estado_Cuenta_ACTA_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Atencion Primaria Emision de Deuda Estado Cuenta ACTA', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("A110865/2",100) 
    master.SeccionTres(100)  
       
});

});