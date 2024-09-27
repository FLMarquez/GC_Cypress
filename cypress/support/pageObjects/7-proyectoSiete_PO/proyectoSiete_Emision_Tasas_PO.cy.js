import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoSiete_Emision_Tasas_PO{

    visitHome() {
        let tiempo = 1000;
        beforeEach(() => {
          cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin');
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
    
      SeccionDos(idtrib,tasa, t) {
        let tiempo = t;
       
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click()
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true })         
    cy.xpath("(//a[contains(.,'Tasas Varias')])[2]").invoke('show').click({ force: true })         
    cy.xpath("//a[contains(.,'Generar Tasas Varias')]").invoke('show').click({ force: true })
    cy.wait(2000)


    
    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    //cy.frameLoaded({ index: 0 })
    cy.get('#vDOCUMENTO').invoke('show').clear();
    cy.wait(tiempo)
   
    cy.get('#vDOCUMENTO').invoke('show').type(idtrib, { timeout: 5000 });
    cy.wait(3000)
    
    cy.get('#vCMCCODIGO').invoke('show').click().type(tasa, { timeout: 5000 });
    cy.wait(3000);
    cy.get('#vDETALLEINSTRUMENTO').should("be.visible").click();
    cy.wait(tiempo);
    cy.get('#AGREGAR').should("be.visible").click();
    cy.wait(tiempo);
    cy.get('#CALCULAR').should("be.visible").click();
    cy.wait(tiempo);
    cy.get('#GENERARTASA').should("be.visible").click();
    cy.wait(tiempo);
       
  
    });
    
    
        
      }

      SeccionTres(t){
        let tiempo=t
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(2500)
        // Seleccionar el iframe hijo 'gxp1_ifrm'
        cy.wait(1500)
        cy.get('iframe[id="gxp0_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
          cy.wait(2500)
                  cy.get('#TEXTBLOCK').invoke('show').and('contain.text', 'Tasas Generadas Correctamente');
                  cy.get('#BUTTON1').should('be.visible').click({force: true})
                  cy.wait(tiempo)
    }); 
    
        });
      }

       
    
           
      SeccionCuatro(t){
        let tiempo=t
       cy.wait(1000)
        cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }
  
  
        
      
    }//final

export default proyectoSiete_Emision_Tasas_PO