// import PoyectoDiez_Apertura_Caja_HOMO_Po from '../../support/pageObjects/10-Caja - HOMO_PO/proyectoDiez_Apertura_Caja_HOMO_PO.cy'

// /// <reference types='cypress' />
// require('cypress-xpath')


// describe('Caja_Apertura_Caja', () => {

//     const master=new PoyectoDiez_Apertura_Caja_HOMO_Po()
    
//     master.visitHome()

//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // returning false here prevents Cypress from failing the test
//         if (err.message.includes('Package is not defined')) {
//           return false;
//         }
//         // otherwise, return true
//         return false;
    
// })

// it('Caja_Apertura_Caja', () => {        
//     master.SeccionUno("jdominguez","jdominguez","K2B Homologación",100) 
//     master.SeccionDos("JDOMINGUEZ","CAja prueba","cajero123",1000)
    
   
    
//     const pdfPath = 'C:/home/workspace/GODOYCRUZ/aadeudacontadosellados2_impl.pdf'; 

//     cy.readPDF(pdfPath).then((text) => {
//         const dato = extraerDato(text); 

//        // Verifica que 'dato' no sea null antes de intentar usarlo
//        if (dato) {
//         cy.log('Dato extraído del PDF: ' + dato);
//         master.llenarCodigoDeBarras(dato, 1000);
//     } else {
//         cy.log('No se pudo extraer un dato válido del PDF');
//         throw new Error('Dato extraído es null o no se encontró en el PDF.');
//     }
    
// });



// function extraerDato(text) {
//     const regex = /\b\d{54}\b/; // Cambiar el regex si el código de barras tiene un formato diferente
//     const match = text.match(regex);
//     return match ? match[0] : null;
// }


//     master.SeccionTres("EFECTIVO","PESOS",1000)
//     master.SeccionCuatro(1000)
   
       
// });

// });