//NumeroObjeto: Dato Prueba 50350

import ProyectoTres_Actividades_Comercio_Po from '../../support/pageObjects/3-proyectoTres_PO/proyectoTres_Actividades_Comercio_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Objetos_Valida_Pantalla', () => {

    const master=new ProyectoTres_Actividades_Comercio_Po()
    
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
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("20263428340","50350",100)  
    master.SeccionTres(100) 
       
});

});