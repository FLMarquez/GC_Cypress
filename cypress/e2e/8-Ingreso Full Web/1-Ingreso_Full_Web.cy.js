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
    master.SeccionDos(2000)
    master.SeccionTres(2000)
    master.SeccionCuatro(2000)   
    master.SeccionCinco(2000)  
    master.SeccionSeis(2000) 
    master.SeccionSiete(2000) 
    master.SeccionOcho(2000) 
    master.SeccionNueve(2000) 
    master.SeccionDiez(2000) 
    master.SeccionOnce(2000) 
    master.SeccionDoce(2000)
    master.SeccionTrece(2000)
    master.SeccionCatorce(2000)
    master.SeccionQuince(2000)
    master.SeccionDieciseis(2000)
    master.SeccionDiecisiete(2000)
    master.SeccionDieciocho(2000)
    master.SeccionDiecinueve(2000)
    master.SeccionVeinte(2000)
    master.SeccionVeintiuno(2000)
    master.SeccionVeintidos(2000)
    master.SeccionVeintitres(2000)
    master.SeccionVeinticuatro(2000)
    master.SeccionVeinticinco(2000)
    master.SeccionVeintiseis(2000)
    master.SeccionVeintisiete(2000)
    master.SeccionVeintiocho(2000)
    master.SeccionVeintinueve(2000)
    master.SeccionTreinta(2000)

});

});