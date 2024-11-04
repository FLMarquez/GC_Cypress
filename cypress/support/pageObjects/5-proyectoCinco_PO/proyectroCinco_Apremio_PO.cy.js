import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class ProyectoCinco_Apremio_PO{

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
    
      SeccionDos(objeto, t) {
        let tiempo = t;
       
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click()
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true })         
    cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true })         
    cy.xpath("//a[contains(.,'Administración Apremios')]").invoke('show').click({ force: true })
    cy.wait(6000)

    cy.frameLoaded({ index: 0 })
    cy.iframe().find('#vOTPID').select(objeto);
    cy.iframe().find('#BUTTON1').click();
    
        
      }
           
      SeccionTres(t){
        let tiempo=t
       cy.wait(1000)
        cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }

        
      
    }//final

export default ProyectoCinco_Apremio_PO