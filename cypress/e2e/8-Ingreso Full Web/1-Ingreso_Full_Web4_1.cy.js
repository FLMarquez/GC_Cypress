//NumeroObjeto: Dato Prueba ----- 46860

import proyectoOcho_Full_Web4_1_PO from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_Full_Web4_1_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingreso Full Web4_1', () => {

    const master=new proyectoOcho_Full_Web4_1_PO()
    
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
it('Ingreso Full Web4_1', () => {
    master.SeccionUno("dsimoncini","dsimoncini",100)
    master.SeccionVeinte(2000)
    master.SeccionVeintiuno(2000)
    master.SeccionVeintidos(2000)
    master.SeccionVeintitres(2000)
    master.SeccionTreinta(2000)

});

});