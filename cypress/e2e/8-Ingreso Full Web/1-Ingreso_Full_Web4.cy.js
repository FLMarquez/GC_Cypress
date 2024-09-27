//NumeroObjeto: Dato Prueba ----- 46860

import proyectoOcho_Full_Web4_PO from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_Full_Web4_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingreso Full Web4', () => {

    const master=new proyectoOcho_Full_Web4_PO()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})
//Segunda parte de Web Full
it('Ingreso Full Web4', () => {
    master.SeccionUno("dsimoncini","dsimoncini",100)
    master.SeccionVeinticuatro(2000)
    master.SeccionVeinticinco(2000)
    master.SeccionVeintiseis(2000)
    master.SeccionVeintisiete(2000)
    master.SeccionVeintiocho(2000)
    master.SeccionVeintinueve(2000)
    master.SeccionTreinta(2000)

});

});