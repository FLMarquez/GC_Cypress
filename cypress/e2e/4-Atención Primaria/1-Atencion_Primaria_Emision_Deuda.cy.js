//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoCuatro_Emision_Deuda_ATPrimaria_Po from '../../support/pageObjects/4-proyectoCuatro_PO/proyectoCuatro_Emision_Deuda_ATPrimaria_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Objetos_Valida_Pantalla', () => {

    const master=new ProyectoCuatro_Emision_Deuda_ATPrimaria_Po()
    
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
    master.SeccionUno("dsimoncini","dsimoncini",5000) 
    master.SeccionDos("46860",5000) 
    master.SeccionTres(4000)  
       
});

});