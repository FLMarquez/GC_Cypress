class ProyectoTres_Objetos_Consultar_Objetos_por_Domicilio_Po {

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
      
        SeccionDos(Numero_Objeto, t) {
          let tiempo = t;
         
          // Navegación por el menú
          cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
          cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
          cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
          cy.xpath("//a[contains(.,'Consultar Objetos por Domicilio')]").invoke('show').click({ force: true });
          cy.wait(tiempo)
          cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
          cy.get('#TITLE').should('be.visible').contains('Búsqueda de Objetos por domicilio')
          cy.wait(tiempo)
          cy.get('#vGENERICFILTER_GRID1').should("be.visible").type(`${Numero_Objeto}{enter}`);
          cy.wait(2000)
          cy.get('#span_VW_OD_OJTIDENTIFICADOR1_0001').should('be.visible').contains(Numero_Objeto)
          cy.wait(tiempo)
          cy.get('#span_VW_OD_OJTIDENTIFICADOR1_0001').should('be.visible').click({force: true})
          cy.wait(tiempo)
          cy.get('#span_OJTIDENTIFICADOR1').should('be.visible').contains('50350')
          cy.wait(tiempo)
          cy.get('#W0065BUTTON3').should('be.visible').click({force: true})
          cy.wait(2000)


            })
          //});
          
          
        }
  
        SeccionTres(t) {
          let tiempo = t;
              
          cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
          cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
          
          
        }
      }//final
  
  export default ProyectoTres_Objetos_Consultar_Objetos_por_Domicilio_Po