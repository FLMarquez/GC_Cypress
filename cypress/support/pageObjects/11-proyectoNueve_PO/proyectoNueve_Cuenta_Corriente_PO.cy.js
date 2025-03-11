class ProyectoNueve_Cuenta_Corriente_Po{

    visitHome() {
      let tiempo = 1000;
      beforeEach(() => {
        cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
          timeout: 800000, // Tiempo máximo de espera en milisegundos
          onBeforeLoad: (win) => {
            win.fetch = null;
            // Acciones antes de que se cargue la página
            console.log('La página está a punto de cargarse');
          },
          onLoad: (win) => {
            // Acciones para cuando la página se carga completamente
            console.log('La página se ha cargado completamente');
          },
          waitForLoad: false, // No esperar a que se cargue completamente
        });
        cy.wait(tiempo);
      });
    }
      
        SeccionUno(usuario, contrasena, t) {
          let tiempo = t;
          if (usuario !== "") {
            cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible", { timeout: 5000 }).type(usuario);
          }
          if (contrasena !== "") {
            cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible", { timeout: 5000 }).type(contrasena);
          }
          cy.wait(tiempo);
          cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible", { timeout: 5000 }).click();
          cy.wait(tiempo);
        }
      
        SeccionDos(Identif_Tribuaria, t) {
          let tiempo = t;
         
          // Navegación por el menú
          cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
          cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
          cy.xpath("//a[contains(.,'Cuenta Corriente')]").invoke('show').click({ force: true });
          cy.xpath("//a[contains(.,'Consulta Cta. Cte.')]").invoke('show').click({ force: true });
          cy.wait(1000)
          cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
          //cy.get('iframe').its('length').should('eq', 0); // Asegúrate de que solo haya un iframe
          //cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
          cy.get('#TITLE').should('be.visible').contains('Consulta Cuenta Corriente')
          cy.get('#vPSNCUIP').should('be.visible').clear().type(Identif_Tribuaria)
          cy.get('#BUTTON3').should('be.visible').click({force: true})
          cy.wait(tiempo)
          cy.get('#span_vPSNDENOMINACION').should('be.visible').contains('SLAMOVITS, RICARDO')
          cy.wait(tiempo)
          
            })
          //});
          
          
        }
  
        SeccionTres(t) {
          let tiempo = t;
              
          cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
          cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
          
          
        }
      }//final
  
  export default ProyectoNueve_Cuenta_Corriente_Po