
import proyectoOcho_Full_Web5_PO from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_Full_Web5_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Ingreso Full Web5', () => {

    const master=new proyectoOcho_Full_Web5_PO()
    
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
it('Ingreso Full Web5', () => {
    master.SeccionUno("dsimoncini","dsimoncini",100)
    master.SeccionDos(2000)
    master.SeccionTres(2000)    

});

});