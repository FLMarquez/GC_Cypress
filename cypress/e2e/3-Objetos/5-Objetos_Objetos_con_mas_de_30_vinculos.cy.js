//Ientificacion Tirbutaria: 20263428340

import ProyectoTres_Objetos_Objetos_con_mas_de_30_vinculos_Po from '../../support/pageObjects/3-proyectoTres_PO/proyectoTres_Objetos_Objetos_con_mas_de_30_vinculos_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Objetos_con_mas_de_30_vinculos', () => {

    const master=new ProyectoTres_Objetos_Objetos_con_mas_de_30_vinculos_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Objetos_con_mas_de_30_vinculos', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("20263428340",100)  
    master.SeccionTres(100) 
       
});

});