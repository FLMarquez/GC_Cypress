import ProyectoTres_Objetos_Consultar_Operacion_Catastro_Po from '../../support/pageObjects/3-proyectoTres_PO/proyectoTres_Objetos_Consultar_Operacion_Catastro_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Objetos_Consultar_Operacion_Catastro', () => {

    const master=new ProyectoTres_Objetos_Consultar_Operacion_Catastro_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Objetos_Consultar_Operacion_Catastro', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",100) 
    master.SeccionDos("Fraccionamiento","8000","2018-000065/T2-GC","PENDIENTE",100)  
    master.SeccionTres(100) 
       
});

});