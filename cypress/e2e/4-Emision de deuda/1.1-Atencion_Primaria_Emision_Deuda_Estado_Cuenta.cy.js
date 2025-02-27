//NumeroObjeto: Dato Prueba ----- 50350

import ProyectoCuatro_Emision_Deuda_ATPrimaria_Estado_Cuenta_Po from '../../support/pageObjects/4-proyectoCuatro_PO/proyectoCuatro_Emision_Deuda_ATPrimaria_Estado_Cuenta_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Atencion_Primaria_Emision_Deuda_ Estado_Cuenta', () => {

    const master=new ProyectoCuatro_Emision_Deuda_ATPrimaria_Estado_Cuenta_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Atencion Primaria Emision de Deuda Estado Cuenta', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("50350",100) 
    master.SeccionTres(100)  
       
});

});