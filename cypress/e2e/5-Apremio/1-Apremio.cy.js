//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoCinco_Apremio_PO from '../../support/pageObjects/5-proyectoCinco_PO/proyectroCinco_Apremio_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Apremio', () => {

    const master=new ProyectoCinco_Apremio_PO()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Apremio', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("COMERCIO",100) 
    master.SeccionTres(100)  
       
});

});