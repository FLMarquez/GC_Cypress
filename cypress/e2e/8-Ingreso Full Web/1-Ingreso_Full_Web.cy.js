//NumeroObjeto: Dato Prueba ----- 46860

import proyectoOcho_Full_Web_PO from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_Full_Web_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingreso Full Web', () => {

    const master=new proyectoOcho_Full_Web_PO()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Ingreso Full Web', () => {
    master.SeccionUno("dsimoncini","dsimoncini",100)
    master.SeccionDos(100)
    master.SeccionTres(100)
    master.SeccionCuatro(100)   
    master.SeccionCinco(100)  
     //master.SeccionSeis(100) 

});

});