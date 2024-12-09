import 'cypress-iframe';

class ProyectoDos_Personas_Datos_Po {
  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.intercept('GET', '**/K2BGAM/servlet/com.k2bgam.*').as('pageLoad');

      cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
        timeout: 1800000,
        onBeforeLoad: (win) => {
          win.fetch = null;
        },
        waitUntil: 'domcontentloaded',
      });

      cy.wait('@pageLoad');
      cy.wait(tiempo);
    });
  }

  SeccionUno(usuario, contrasena, t) {
    let tiempo = t;

    if (usuario !== '') {
      cy.get('#vUSERNAME').should('be.visible').type(usuario, { log: false });
    }
    if (contrasena !== '') {
      cy.get('#vUSERPASSWORD').should('be.visible').type(contrasena, { log: false });
    }

    cy.get('#LOGIN').should('be.visible').click();
    cy.wait(tiempo);
  }

  SeccionDos(cuit, Telefono, email, t) {
    let tiempo = t;

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should('be.visible').click({ force: true });
    cy.contains('span.sidebar-nav-item', 'Tributario Faro', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

      cy.contains('a', 'Personas')
      .should("be.visible")
      .click({ force: true });
      
      cy.contains('a', 'Administración de Personas')
      .invoke('show')
      .click({ force: true });

    cy.get('iframe[name="EMBPAGEM"]')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .within(() => {
        cy.get('#vK2BTOOLSGENERICSEARCHFIELD').should('be.visible').type(`${cuit}{enter}`);
        
        cy.get('#vUPDATE_0001')
        .should('exist')
        .invoke('show')
        .click({ force: true });

        cy.iframe('#gxp0_ifrm').should('exist').then(($iframe) => {
          const frame = cy.wrap($iframe);

          frame.contains('a','Ver más')
            .should('exist') 
            .and('be.visible') 
            .invoke('show') 
            .click({ force: true });

          frame.xpath("//input[contains(@id,'PSNCARACTER01')]")
            .should('exist') 
            .and('be.visible') 
            .invoke('show') 
            .clear()
            .type(Telefono);

          frame.xpath("//input[contains(@id,'PSNCARACTER03')]")
            .should('exist') 
            .and('be.visible') 
            .invoke('show') 
            .clear()
            .type(email);

          frame.xpath("//input[contains(@id,'ENTER')]")
            .should('exist') 
            .and('be.visible') 
            .invoke('show') 
            .click({ force: true });
        });

        cy.get('div.toast-message')        
        .contains('La personas fisicas SLAMOVITS fue actualizada');
      });
  }

  SeccionTres(t) {
    let tiempo = t;

    cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({ force: true });
    cy.get('#SIGNOUT_MPAGE').should('be.visible').click({ force: true });
  }
}

export default ProyectoDos_Personas_Datos_Po;
