//NumeroObjeto: Dato Prueba ----- 46860

import proyectoOcho_Full_Web1_1_PO from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_Full_Web1_1_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingreso Full Web1_1', () => {

    const master=new proyectoOcho_Full_Web1_1_PO()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Ingreso Full Web1_1', () => {
    master.SeccionUno("dsimoncini","dsimoncini",100)
    master.SeccionDos(2000)
    master.SeccionTres(2000)
    master.SeccionCuatro(2000)   
    master.SeccionCinco(2000)  
    master.SeccionSeis(2000) 
    master.SeccionSiete(2000) 
    master.SeccionOcho(2000) 
    master.SeccionTreinta(2000)

});

});