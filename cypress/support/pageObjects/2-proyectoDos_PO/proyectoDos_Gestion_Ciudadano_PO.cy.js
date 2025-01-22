// import 'cypress-iframe'

// class ProyectoDos_Gestion_Ciudadano_Po {

//   visitHome() {
//     let tiempo = 1000;
//     beforeEach(() => {
//       // Intercepta una solicitud específica para observar o modificar el comportamiento
//       cy.intercept('GET', '**/K2BGAM/servlet/com.k2bgam.*').as('pageLoad');

//       // Carga la página
//       cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
//         timeout: 1800000, // Tiempo máximo de espera aumentado a 30 minutos
//         onBeforeLoad: (win) => {
//           win.fetch = null;
//           console.log('La página está a punto de cargarse');
//         },
//         onLoad: (win) => {
//           console.log('La página se ha cargado completamente');
//         },
//         waitUntil: 'domcontentloaded', // Esperar solo hasta que el contenido del DOM esté listo
//         waitForLoad: false, // No esperar a que se cargue completamente
//       });

//       // Espera a que la solicitud interceptada se complete antes de continuar
//       cy.wait('@pageLoad');
//       cy.wait(tiempo);
//     });
//   }
     

//     SeccionUno(usuario, contrasena, t) {
//         let tiempo = t;
//         if (usuario !== "") {
//             cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible", { timeout: 5000 }).type(usuario);
//         }
//         if (contrasena !== "") {
//             cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible", { timeout: 5000 }).type(contrasena);
//         }
//         cy.wait(tiempo);
//         cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible", { timeout: 5000 }).click();
//         cy.wait(tiempo);
//     }

//     // SeccionDos(cuit, t) {
//     //     let tiempo = t;

//     //     // Navegación por el menú
//     //     cy.get('[name="BTNTOGGLEMENU_MPAGE"]')
//     //     .should("be.visible")
//     //     .click({ force: true });

//     //     cy.get('span.sidebar-nav-item')
//     //     .should("be.visible")
//     //     .contains('Tributario Faro')
//     //     .click({ force: true });

//     //     cy.contains('a', 'Personas')
//     //     .should("be.visible")
//     //     .click({ force: true });
      
//     //     cy.contains('a', 'Gestión del Ciudadano')
//     //     .invoke('show')
//     //     .click({ force: true });

//     //     // Búsqueda de una persona en Gestión del Ciudadano
//     //     cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//     //         // Escribir el CUIT y presionar Enter en el campo de búsqueda
//     //         cy.get('#vCODTITULAR').should("be.visible").type(`${cuit}{enter}`);
//     //         //cy.wait(5000)

//     //         // Esperar y hacer clic en el botón de BUSCAR (BUTTON1)
//     //         cy.get('#BUTTON1')
//     //         .should('exist')
//     //         .invoke('show')
//     //         .click({ force: true });
            
//     //         // Validar Nombre del Titular según CUIT
//     //         cy.get('#span_SDTVAR_TITULARES_0001')
//     //         .should('exist') 
//     //         .and('be.visible') 
//     //         .invoke('show') 
//     //         .contains('VILLANUEVA LUCAS'); 

//     //         cy.wait(1500)

//     //           // Esperar y hacer clic en el botón de LIMPIAR (BUTTON2)
//     //           cy.get('#BUTTON2')
//     //           .should('exist')
//     //           .invoke('show')
//     //           .click({ force: true });
            
//     //         // Validar que no existan resultados después de limpiar la búsqueda
//     //         cy.get('#I_NORESULTSFOUNDTEXTBLOCK_GRID1')
//     //         .should('exist') 
//     //         .and('be.visible') 
//     //         .invoke('show') 
//     //         .contains('No hay resultados'); 
             

//     //     });

//     // }

//     SeccionTres(titular, t) {
//       let tiempo = t;

//            // Navegación por el menú
//         cy.get('[name="BTNTOGGLEMENU_MPAGE"]')
//         .should("be.visible")
//         .click({ force: true });

//         cy.get('span.sidebar-nav-item')
//         .should("be.visible")
//         .contains('Tributario Faro')
//         .click({ force: true });

//         cy.contains('a', 'Personas')
//         .should("be.visible")
//         .click({ force: true });
      
//         cy.contains('a', 'Gestión del Ciudadano')
//         .invoke('show')
//         .click({ force: true });
  
//       // Seleccionar el iframe padre 'EMBPAGEM' primero
//       cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//           // Seleccionar el iframe hijo 'gxp1_ifrm'
//           //cy.get('iframe[id="gxp1_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//               cy.xpath("//input[contains(@id,'vNOMTITULAR')]").invoke('show').type(titular, { force: true });
//               cy.wait(tiempo)
//                // Esperar y hacer clic en el botón de BUSCAR (BUTTON1)
//             cy.get('#BUTTON1')
//             .should('exist')
//             .invoke('show')
//             .click({ force: true });
            
//             // Validar Nombre del Titular según CUIT
//             cy.get('#span_SDTVAR_TITULARES_0001')
//             .should('exist') 
//             .and('be.visible') 
//             .invoke('show') 
//             .contains('VILLANUEVA LUCAS', { timeout: 2000 }); 

//             cy.wait(1500)

//               // Esperar y hacer clic en el botón de LIMPIAR (BUTTON2)
//               cy.get('#BUTTON2')
//               .should('exist')
//               .invoke('show')
//               .click({ force: true });
            
//             // Validar que no existan resultados después de limpiar la búsqueda
//             cy.get('#I_NORESULTSFOUNDTEXTBLOCK_GRID1')
//             .should('exist') 
//             .and('be.visible') 
//             .invoke('show') 
//             .contains('No hay resultados'); 
//             });
//       //});
//   }
  
  

//   SeccionCuatro(dirip, t) {
//     let tiempo = t;

//     // Seleccionar el iframe padre 'EMBPAGEM' primero
//     cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//         // Asegúrate de que solo haya un iframe con el que trabajas
//         cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
//         cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//             cy.get('#vDIRIP').invoke('show', { timeout: 2000 }).type(dirip);
//             cy.wait(tiempo)
//              // Esperar y hacer clic en el botón de BUSCAR (BUTTON1)
//              cy.get('#BUTTON1')
//              .should('exist')
//              .invoke('show')
//              .click({ force: true });
             
//              // Validar Nombre del Titular según CUIT
//              cy.get('#span_SDTVAR_TITULARES_0001')
//              .should('exist') 
//              .and('be.visible') 
//              .invoke('show') 
//              .contains('VILLANUEVA LUCAS'); 
 
//              cy.wait(1500)
 
//                // Esperar y hacer clic en el botón de LIMPIAR (BUTTON2)
//                cy.get('#BUTTON2')
//                .should('exist')
//                .invoke('show')
//                .click({ force: true });
             
//              // Validar que no existan resultados después de limpiar la búsqueda
//              cy.get('#I_NORESULTSFOUNDTEXTBLOCK_GRID1')
//              .should('exist') 
//              .and('be.visible') 
//              .invoke('show') 
//              .contains('No hay resultados'); 
//         });
//     });
// }

// SeccionCinco(Exped_Codigo,t) {
//   let tiempo = t;

//   // Seleccionar el iframe padre 'EMBPAGEM' primero
//    // Seleccionar el iframe padre 'EMBPAGEM' primero
//    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//     // Seleccionar el iframe hijo 'gxp1_ifrm'
//     cy.get('iframe[id="gxp1_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
//           cy.get('#vEXPEDCODIGO').type(Exped_Codigo, { force: true });
//           cy.wait(tiempo)
//           // Esperar y hacer clic en el botón de BUSCAR (BUTTON1)
//           cy.get('#BUTTON1')
//           .should('exist')
//           .invoke('show')
//           .click({ force: true });
          
//           // Validar Nombre del Titular según CUIT
//           cy.get('#span_SDTVAR_TITULARES_0001')
//           .should('exist') 
//           .and('be.visible') 
//           .invoke('show') 
//           .contains('VILLANUEVA LUCAS'); 

//           cy.wait(1500)

//             // Esperar y hacer clic en el botón de LIMPIAR (BUTTON2)
//             cy.get('#BUTTON2')
//             .should('exist')
//             .invoke('show')
//             .click({ force: true });
          
//           // Validar que no existan resultados después de limpiar la búsqueda
//           cy.get('#I_NORESULTSFOUNDTEXTBLOCK_GRID1')
//           .should('exist') 
//           .and('be.visible') 
//           .invoke('show') 
//           .contains('No hay resultados'); 
//           });
//   });
// }
// //  SeccionSeis(numerocalle, barrio, t) {
// //     let tiempo = t;

// //     // Seleccionar el iframe padre 'EMBPAGEM' primero
// //     cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
// //         // Asegúrate de que solo haya un iframe con el que trabajas
// //         cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
// //         cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        
// //         cy.xpath("//input[@id='DMCNRO']").should('be.visible').clear({ force: true });
// //         cy.wait(1000)
// //         cy.xpath("//input[@id='DMCNRO']").should('be.visible').type(numerocalle);
        
          
// //           cy.get('#BARRIOID').should('be.visible').select(barrio, { force: true });
// //           cy.wait(tiempo)
// //           cy.get('#CONFIRMARCARGA').click({ force: true });
// //           cy.wait(tiempo)
          
// //         });
// //     });

// //   }
// //  SeccionSiete(t) {
// //   let tiempo = t;
// //   cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
// //     // Seleccionar el iframe hijo 'gxp1_ifrm'
// //     cy.get('iframe[id="gxp1_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
// //               cy.get('#TEXTBLOCK').should('be.visible').and('contain.text', 'El Domicilio fue Agregado con Exito');
// //               cy.get('#BUTTON1').should('be.visible').click({force: true})
// //               cy.wait(tiempo)
// // }); 

// //     });


// //  }

//  SeccionOcho(t) {
//   let tiempo = t;
      
//   cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
//   cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
  
  
// }

 

// }

// export default ProyectoDos_Gestion_Ciudadano_Po
