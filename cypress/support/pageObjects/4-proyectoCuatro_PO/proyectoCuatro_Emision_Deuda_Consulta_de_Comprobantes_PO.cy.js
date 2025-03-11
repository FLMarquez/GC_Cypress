import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class ProyectoCuatro_Emision_Deuda_Consulta_de_Comprobantes_Po {

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

  SeccionDos(numero_objeto, t) {
    let tiempo = t;

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Consulta de Comprobantes')]").invoke('show').click({ force: true });
    cy.wait(tiempo);

    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    
    // cy.get('#vFECHADESDE').should('be.visible').click().type(FechaDesde);
    // cy.wait(tiempo)
    // cy.get('#vFECHAHASTA').should('be.visible').click().type(FechaHasta);
    // cy.wait(tiempo)
    // cy.get('#vBOANROREGISTRO').should('be.visible').type(numero_comprobante);
    // cy.wait(tiempo)
    // cy.get('#vPSNCUIP').should('be.visible').type(identificacion_trubutaria);
    // cy.wait(tiempo)
    // cy.get('#vOTPID').select(tipo_objeto, { force: true})
    // cy.wait(tiempo)
    cy.get('#vOJTIDENTIFICADOR1').should('be.visible').type(numero_objeto);
    cy.wait(tiempo)
    // cy.get('#vBOAIMPORTEPAGOF').should('be.visible').type(monto);
    // cy.wait(tiempo)
    // cy.get('#vOBNPERIODOF').should('be.visible').type(periodo);
    // cy.wait(tiempo)
    // cy.get('#vOBNCUOTAF').should('be.visible').type(cuota);
    // cy.wait(tiempo)
    // cy.get('#vFECHAVENCIMIENTODESDEF').should('be.visible').type(fecha_vencimiento_desde);
    // cy.wait(tiempo)
    // cy.get('#vFECHAVENCIMIENTOHASTAF').should('be.visible').type(fecha_vencimiento_hasta);
    // cy.wait(tiempo)


    cy.get('#BUSCAR').should('be.visible').click({force: true})
    cy.wait(tiempo)

    cy.get('#span_SDTVAR_OJTIDENTIFICADOR11_0001').should('be.visible').contains(numero_objeto);
    cy.wait(tiempo)


    
    cy.get('#vVERDETALLE_ACTION_0001',{ timeout: 60000 }).should('exist').invoke('show').click({ force: true });
    cy.wait(1000);

    });

}

  SeccionTres(t) {
    let tiempo = t;
    cy.wait(1000);
    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      // Seleccionar el iframe hijo 'gxp1_ifrm'
      cy.get('iframe[id="gxp0_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#span_OTPDESCRIPCION_0001').should('be.visible').contains('INMUEBLES');
        cy.get('#span_OTPDESCRIPCION_0001').should('be.visible').click({force: true});   
        cy.get('#vDETALLEBOLETA_ACTION_0001').click({ force: true });
      });
      });
  }


  SeccionCuatro(t) {
    let tiempo = t;
    cy.wait(1000);
    cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({ force: true });
    cy.get('#SIGNOUT_MPAGE').should('be.visible').click({ force: true });
  }
}



export default ProyectoCuatro_Emision_Deuda_Consulta_de_Comprobantes_Po;
