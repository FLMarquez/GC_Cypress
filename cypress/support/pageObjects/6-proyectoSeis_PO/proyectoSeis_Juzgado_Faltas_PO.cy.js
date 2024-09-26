import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class ProyectoSeis_Juzgado_Faltas_PO{

  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
        timeout: 300000, // Tiempo máximo de espera en milisegundos
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
    
      SeccionDos(tipo_objeto,objeto, t) {
        let tiempo = t;
       
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click()
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true })         
    cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true })         
    cy.xpath("//a[contains(.,'Generación de Recursos')]").invoke('show').click({ force: true })
    cy.wait(2000)


    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    //cy.frameLoaded({ index: 0 })
    cy.get('#vOTPID').select(tipo_objeto);
    cy.wait(tiempo)
    cy.get('#vOJTIDENTIFICADOR1').type(objeto);
    cy.wait(tiempo);
    cy.get('#BUTTON1').should("be.visible").click();
    cy.wait(2500);
    
  
    });
    
    
        
      }

      SeccionTres(t){
        let tiempo=t

        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
          // Seleccionar el iframe hijo 'gxp1_ifrm'
        //cy.get('iframe[id="gxp0_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//input[contains(@id,'SDTVAR_SELECCION_0001')]").invoke('show').click();
        cy.get('#BUTTON5').should("be.visible").click();
        cy.wait(1000);

          })
          //})

    }

      
           
      SeccionCuatro(t){
        let tiempo=t
       cy.wait(1000)
        cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }

        
      
    }//final

export default ProyectoSeis_Juzgado_Faltas_PO