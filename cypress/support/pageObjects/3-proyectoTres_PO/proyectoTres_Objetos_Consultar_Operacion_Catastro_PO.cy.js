class ProyectoTres_Objetos_Consultar_Operacion_Catastro_Po {

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
      
        SeccionDos(tipo_operacion,padron_origen,expediente,estado, t) {
          let tiempo = t;
         
          // Navegación por el menú
          cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
          cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
          cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
          cy.xpath("//a[contains(.,'Consultar Operaciones Catastro')]").invoke('show').click({ force: true });
          cy.wait(1000)
          cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
          cy.get('#TITLE').should('be.visible').contains('Consultar Operación Catastro')
          cy.wait(1000)
          cy.get('#vOFSTIPOOPERACION').select(tipo_operacion, { force: true})
          cy.wait(1000)
          cy.get('#vOFSCUENTAORIGEN').should('be.visible').type(padron_origen);
          cy.wait(1000)
          cy.get('#vOFSEXPEDIENTE').should('be.visible').type(expediente);
          cy.wait(1000)
          cy.get('#vOFSESTADO').select(estado, { force: true})
          cy.wait(1000)
          cy.get('#BUSCAR').should('be.visible').click({force: true})
          cy.wait(tiempo)
          cy.get('#span_OFSCUENTAORIGEN_0001').should('be.visible').contains('8000')
          cy.wait(tiempo)
          cy.get('#LIMPIAR').should('be.visible').click({force: true})
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
  
  export default ProyectoTres_Objetos_Consultar_Operacion_Catastro_Po