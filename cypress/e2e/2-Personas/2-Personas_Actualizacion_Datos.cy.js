import ProyectoDos_Personas_Datos_Po from '../../support/pageObjects/2-proyectoDos_PO/proyectoDos_Personas_Datos_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Actualización_Datos', () => {

    const master=new ProyectoDos_Personas_Datos_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Usuario y Contraseña Válido', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",1000) 
    master.SeccionDos("20263428340","4799999","prueba@elinpar.com",1000)
    master.SeccionTres(1000)

       
});

});