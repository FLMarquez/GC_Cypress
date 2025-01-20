// //NumeroObjeto: Dato Prueba ----- 46860

// import ProyectoNueve_Emision_Deuda_ATPrimaria_HOMO_Po from '../../support/pageObjects/9-Atencion Primaria_HOMO_PO/proyectoNueve_Emision_Deuda_ATPrimaria_HOMO_PO.cy'

// /// <reference types='cypress' />
// require('cypress-xpath')


// describe('Atencion_Primaria_Emision_Deuda_HOMO', () => {

//     const master=new ProyectoNueve_Emision_Deuda_ATPrimaria_HOMO_Po()
    
//     master.visitHome()

//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // returning false here prevents Cypress from failing the test
//         if (err.message.includes('Package is not defined')) {
//           return false;
//         }
//         // otherwise, return true
//         return false;
    
// })

// it('Atencion Primaria Emision de Deuda', () => {        
//   master.SeccionUno("jdominguez","jdominguez","K2B Homologación",100) 
//     master.SeccionDos("50350",100) 
//     master.SeccionTres(100)  
       
// });

// });