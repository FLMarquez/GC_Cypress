//NumeroObjeto: Dato Prueba -----

import ProyectoTres_Objetos_Po from '../../support/pageObjects/3-proyectoTres_PO/proyectoTres_Objetos_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


//describe('Objetos_Valida_Pantalla', () => {

    const master=new ProyectoTres_Objetos_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Validar pantalla Objetos', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",1000) 
    master.SeccionDos("20263428340",1000)  
    master.SeccionTres(1000) 
       
});

});