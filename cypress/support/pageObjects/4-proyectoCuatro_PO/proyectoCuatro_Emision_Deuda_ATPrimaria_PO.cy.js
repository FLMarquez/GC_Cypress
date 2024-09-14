import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class ProyectoCuatro_Emision_Deuda_ATPrimaria_Po {

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

  SeccionDos(objeto, t) {
    let tiempo = t;

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Atención Primaria')]").invoke('show').click({ force: true });
    cy.wait(6000);

    cy.frameLoaded({ index: 0 });
    cy.iframe().find('#vFILTROGENERAL').type(objeto);
    cy.iframe().find('#BUSCAR').should("be.visible").click({ force: true });

    cy.iframe().xpath("(//a[contains(.,'Consultar')])[1]").invoke('show').click({ force: true });
    cy.wait(5000);

    cy.iframe().find('#Tab_TABS_TABSCONTROLContainerpanel1').invoke('show').click({ force: true });
    cy.wait(5000);

    cy.iframe().xpath("(//label[contains(@for,'GRIDOBLIGACIONES')])[1]").should('be.visible').click({ force: true });
    cy.wait(5000);

    cy.iframe().xpath("//input[@id='IMPRIMIRCONTADO']").invoke('click');
    cy.wait(10000); // Espera 10 segundos para asegurar que el PDF se descargue
  }

  SeccionTres(t) {
    let tiempo = t;
    cy.wait(1000);
    cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({ force: true });
    cy.get('#SIGNOUT_MPAGE').should('be.visible').click({ force: true });
  }
}

export default ProyectoCuatro_Emision_Deuda_ATPrimaria_Po;
