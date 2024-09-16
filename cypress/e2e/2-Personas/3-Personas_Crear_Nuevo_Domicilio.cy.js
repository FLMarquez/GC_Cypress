import ProyectoDos_Personas_Nuevo_Domicilio_Po from '../../support/pageObjects/2-proyectoDos_PO/proyectoDos_Personas_Nuevo_Domicilio_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Crear_Nuevo_Domicilio', () => {

    const master=new ProyectoDos_Personas_Nuevo_Domicilio_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Personas_Crear_Nuevo_Domicilio', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",2000) 
    master.SeccionDos("20263428340","FISCAL","ARGENTINA","MENDOZA","GODOY CRUZ",2000)
    master.SeccionTres("CENTRO",2000)
    master.SeccionCuatro("5010",2000)
    master.SeccionCinco("25 DE MAYO",2000)
    master.SeccionSeis("5555","AATRA",2000)
    master.SeccionSiete(2000)
    master.SeccionOcho(1000)
       
});

});