//NumeroObjeto: Dato Prueba ----- 46860

import proyectoOcho_Full_Web3_1_PO from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_Full_Web3_1_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingreso Full Web3_1', () => {

    const master=new proyectoOcho_Full_Web3_1_PO()
    
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
it('Ingreso Full Web3_1', () => {
    master.SeccionUno("dsimoncini","dsimoncini",100)
    master.SeccionDiecisiete(2000)
    master.SeccionDieciocho(2000)
    master.SeccionDiecinueve(2000)
    master.SeccionTreinta(2000)

});

});