//NumeroObjeto: Dato Prueba ----- 46860

import ProyectoSeis_Juzgado_Faltas_PO from '../../support/pageObjects/6-proyectoSeis_PO/proyectoSeis_Juzgado_Faltas_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


//describe('Juzgado de Faltas', () => {

    const master=new ProyectoSeis_Juzgado_Faltas_PO()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Juzgado de Falta', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",1000) 
    master.SeccionDos("MULTAS DE TRANSITO","T99993-2005",1000) 
    master.SeccionTres(1000)  
    master.SeccionCuatro(1000) 
       
});

});