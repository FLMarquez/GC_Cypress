import 'cypress-iframe';

class ProyectoDos_Po {
  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
        timeout: 800000, // Tiempo máximo de espera en milisegundos
        onBeforeLoad: (win) => {
          win.fetch = null;
          console.log('La página está a punto de cargarse');
        },
        onLoad: (win) => {
          console.log('La página se ha cargado completamente');
        },
        waitForLoad: false,
      });
      cy.wait(tiempo);
    });
  }

  SeccionUno(usuario, contrasena, t) {
    let tiempo = t;
    if (usuario !== "") {
      cy.get('#vUSERNAME').should("be.visible").type(usuario);
    }
    if (contrasena !== "") {
      cy.get('#vUSERPASSWORD').should("be.visible").type(contrasena);
    }
    cy.get('#LOGIN').should("be.visible").click();
    cy.wait(tiempo);
  }

  SeccionDos(cuit, t) {
    let tiempo = t;

    // Navegación por el menú
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Personas')])[1]").should("be.visible").click({ force: true });
    cy.xpath("//a[contains(.,'Administración de Personas')]").invoke('show').click({ force: true });

    // Manejo del iframe
    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .within(() => {
        // Validar elementos antes de proceder
        cy.get('.K2BT_TagsCollectionEmptyMessage').should('be.visible').contains('No hay filtros aplicados');
        cy.get('#vK2BTOOLSGENERICSEARCHFIELD').should("be.visible").type(`${cuit}{enter}`);

        // Interacción con elementos dinámicos
        cy.get('#vVER_0001', { timeout: 60000 }).should('exist').invoke('show').click({ force: true });
        cy.wait(1000);

        // Validar y hacer clic en paneles
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel1', { timeout: 60000 })
          .should('exist')
          .and('be.visible')
          .invoke('show')
          .click({ force: true });

        cy.wait(1000);
        cy.get('#GRIDTITLE_GRID').should("be.visible");
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel2').invoke('show').click({ force: true });
        cy.get('#GRIDTITLE_GRID1').should("be.visible");
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel3').invoke('show').click({ force: true });
        cy.get('#GRIDTITLE_GRID2').should("be.visible");
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel4').invoke('show').click({ force: true });
        cy.get('#GRIDTITLE_GRID3').should("be.visible");
      });
  }

  SeccionTres(t) {
    let tiempo = t;
    cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({ force: true });
    cy.get('#SIGNOUT_MPAGE').should('be.visible').click({ force: true });
  }
}

export default ProyectoDos_Po;
