import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');
class ProyectoNueve_Cierre_Caja_HOMO_PO{

    visitHome() {
        let tiempo = 1000;
        beforeEach(() => {
          cy.visit('https://gcdigitalhomo.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
            timeout: 300000, // Tiempo máximo de espera en milisegundos
            onBeforeLoad: (win) => {
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
        
          SeccionUno(usuario, contrasena,ambiente, t) {
            let tiempo = t;
            if (usuario !== "") {
              cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible").type(usuario);
            }
            if (contrasena !== "") {
              cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible").type(contrasena);
            }
    
            if (ambiente !== "") {
            cy.get('#vAPPENVNAME').select(ambiente, { force: true});
            
            }
            
            cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible").click();
            
          }
    
      SeccionDos(t) {
        let tiempo = t;
        
       
        // Navegación por el menú
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 })
        .should("be.visible")
        .click();

        cy.get('span.sidebar-nav-item', { timeout: 10000 })
        .should("be.visible")
        .contains('Tributario Faro')
        .click({ force: true });

        cy.xpath("(//a[contains(.,'Cajas')])[1]", { timeout: 10000 })
        .invoke('show')
        .click({ force: true });

        cy.xpath("//a[contains(.,'Cierre de Caja')]", { timeout: 100000 })
        .invoke('show')
        .click({ force: true });

        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {

        cy.xpath('//*[@id="vCIERRECAJA_ACTION_0001"]')
        .invoke('show')
        .click({force: true});
        });

        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
          cy.wrap($iframe)
          .xpath("//*[@id='span_vLEYENDA']")
          .should('be.visible')
          .contains('La caja CAja prueba se cerró correctamente')
          .then(() => {
              cy.wrap($iframe)
              .xpath("//*[@id='ACTION']")
              .should('be.visible')
              .click({force: true});
          });
      });
      

        cy.wait(tiempo);
                
        cy.get('#USERINITIALSTEXTBLOCKSMALL_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

          }
      
        
    }//final

export default ProyectoNueve_Cierre_Caja_HOMO_PO



