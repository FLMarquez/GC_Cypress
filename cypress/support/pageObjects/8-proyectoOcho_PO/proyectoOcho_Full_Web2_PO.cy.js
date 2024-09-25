import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web2_PO {

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
    

SeccionQuince(t){
  let tiempo=t
  //INFORME CAJAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Cajas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Resumen Cobranzas')])[1]").invoke('show').click({ force: true });
      
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resumen Cobranza')]").should('be.visible').contains('Resumen Cobranza')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Cajas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resumen Cobranzas por Cajero')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resumenes Cobranzas de Cajeros')]").should('be.visible').contains('Resumenes Cobranzas de Cajeros')
      cy.wait(tiempo)
    });

}

SeccionDieciseis(t){
  let tiempo=t
  //JUZGADO DE FALTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Administración de Talonarios')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Talonarios')]").should('be.visible').contains('Administración de Talonarios')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Nueva Acta de Infracción')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Nueva Acta de Infracción')]").should('be.visible').contains('Nueva Acta de Infracción')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Recursos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Recursos')]").should('be.visible').contains('Generación de Recursos')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Resoluciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Resoluciones juzgado 1')]").should('be.visible').contains('ABM Resoluciones juzgado 1')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Editar Resolución')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Editar Resolución')]").should('be.visible').contains('Editar Resolución')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Antecedentes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Antecedentes')]").should('be.visible').contains('Consulta de Antecedentes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Resolución Masiva')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Resoluciones Masivas')]").should('be.visible').contains('Consulta Resoluciones Masivas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resolución Masiva Pago Voluntario')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resolución Masiva Pago Voluntario')]").should('be.visible').contains('Resolución Masiva Pago Voluntario')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Juzgados')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración De Juzgados')]").should('be.visible').contains('Administración De Juzgados')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Resolución Masiva')])[3]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resolución Masiva')]").should('be.visible').contains('Resolución Masiva')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Notificación de Recursos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Notificación Recursos')]").should('be.visible').contains('Notificación Recursos')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Actas Sin Infractor')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Alta Vinculos Actas')]").should('be.visible').contains('Alta Vinculos Actas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Resoluciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Resoluciones')]").should('be.visible').contains('Consulta Resoluciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración de Infracciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Resolucion Infracciones')]").should('be.visible').contains('Administración de Resolucion Infracciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Lote Cédula')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Lote Cédula')]").should('be.visible').contains('Generación Lote Cédula')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración Lote Notificación')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Lotes')]").should('be.visible').contains('Administración de Lotes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Cédulas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Cédulas')]").should('be.visible').contains('Administración de Cédulas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Recepción y Devolución de Cédula')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Cédulas - Notificaciones')]").should('be.visible').contains('Administración de Cédulas - Notificaciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Infracciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM INFRACCIONES')]").should('be.visible').contains('ABM INFRACCIONES')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resolución de Accidentes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resolución Accidentes')]").should('be.visible').contains('Resolución Accidentes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM unidad Fija')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Unidad fijas')]").should('be.visible').contains('Unidad fijas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Parametro por Juzgado')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Certificado Parámetros')]").should('be.visible').contains('Certificado Parámetros')
      cy.wait(tiempo)
    });

}


SeccionDiecisiete(t){
  let tiempo=t
  //GESTIÓN DE DEUDA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Lote')]").should('be.visible').contains('Generación de Lote')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Lotes')]").should('be.visible').contains('Consulta de Lotes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generar Lote Precargado')]").should('be.visible').contains('Generar Lote Precargado')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Gestiones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Gestiones')]").should('be.visible').contains('Administración de Gestiones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Tags')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Tags')]").should('be.visible').contains('Administración de Tags')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Notificaciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Notificaciones')]").should('be.visible').contains('Administración de Notificaciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión Telefónica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Gestión Telefónica')]").should('be.visible').contains('Gestión Telefónica')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Respuesta')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Respuestas')]").should('be.visible').contains('ABM Respuestas')
      cy.wait(tiempo)
    });

}


SeccionDieciocho(t){
  let tiempo=t
  //APREMIO
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote')])[3]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Lote')]").should('be.visible').contains('Generación de Lote')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Lotes')]").should('be.visible').contains('Consulta de Lotes')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración Apremios')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Apremios')]").should('be.visible').contains('Administración de Apremios')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generar Lote Precargado')]").should('be.visible').contains('Generar Lote Precargado')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Sorteo de Apremio')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Sorteo de Apremios')]").should('be.visible').contains('Sorteo de Apremios')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cargar Etapa Masiva')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Carga Masiva de Etapas')]").should('be.visible').contains('Carga Masiva de Etapas')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Importar Archivo Etapa')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Importar Archivo Etapas')]").should('be.visible').contains('Importar Archivo Etapas')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Imprimir Apremio')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Impresión Boletas Apremio')]").should('be.visible').contains('Impresión Boletas Apremio')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Recaudadores')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Informes Recaudador')]").should('be.visible').contains('Informes Recaudador')
      cy.wait(tiempo)
    });

}


SeccionDiecinueve(t){
  let tiempo=t
  //MASIVA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Universos Masiva')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Universos Masivas')]").should('be.visible').contains('ABM Universos Masivas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Masiva de Obligaciones')]").should('be.visible').contains('Generación Masiva de Obligaciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Comprobantes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Masiva de Comprobantes')]").should('be.visible').contains('Generación Masiva de Comprobantes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Muestras de Impresión')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Archivos de Impresión de Muestras')]").should('be.visible').contains('Generación Archivos de Impresión de Muestras')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Impresión Definitiva')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Archivos de Impresión Definitivos')]").should('be.visible').contains('Generación Archivos de Impresión Definitivos')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Archivos para Entes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Archivos Entes')]").should('be.visible').contains('Generación Archivos Entes')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva de Ascensores')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generacion Masiva Ascensores')]").should('be.visible').contains('Generacion Masiva Ascensores')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Impresión de PDF de Masiva en Servidor')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Impresión Masiva')]").should('be.visible').contains('Impresión Masiva')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Boleto Digital Masiva')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Boleta Digital Masiva')]").should('be.visible').contains('Boleta Digital Masiva')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Imágen Publicidad Boleto')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Imagen Publicidad Boleto Masiva')]").should('be.visible').contains('Imagen Publicidad Boleto Masiva')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Objetos Excluidos Masiva')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Objetos Exluidos Masiva')]").should('be.visible').contains('Objetos Exluidos Masiva')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Canastos y Alarmas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Masiva Canastos y Alarmas')]").should('be.visible').contains('Generación Masiva Canastos y Alarmas')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Monitor Masiva')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Monitoreo Procesos Masiva')]").should('be.visible').contains('Monitoreo Procesos Masiva')
      cy.wait(tiempo)
    });

}

SeccionVeinte(t){
  let tiempo=t
  //TRIBUNAL DE CUENTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Informes de Tribunal de Cuentas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Informes Tribunal de Cuentas')]").should('be.visible').contains('Generación Informes Tribunal de Cuentas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Importar Juicios Jurídica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Importar Juicios Jurídica')]").should('be.visible').contains('Importar Juicios Jurídica')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Excel Jurídica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Archivos Juicios Juridica')]").should('be.visible').contains('Consulta Archivos Juicios Juridica')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de estado de gestión de cobranza')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Informe de estado de gestión de cobranza')]").should('be.visible').contains('Informe de estado de gestión de cobranza')
      cy.wait(tiempo)
    });
}

SeccionVeintiuno(t){
  let tiempo=t
  //OBRAS PARTICULARES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Obras Particulares')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Obras Particulares')]").should('be.visible').contains('Obras Particulares')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva de Ascensores')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generacion Masiva Ascensores')]").should('be.visible').contains('Generacion Masiva Ascensores')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Anular Obra Particular')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Anulación Aforo Obras Particulares')]").should('be.visible').contains('Anulación Aforo Obras Particulares')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Permisos de Conexión')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Permiso conexiones')]").should('be.visible').contains('Permiso conexiones')
      cy.wait(tiempo)
    });

}


SeccionVeintidos(t){
  let tiempo=t
  //PAGOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Pagos')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Desaplicación de Pagos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Desaplicación de Pagos')]").should('be.visible').contains('Desaplicación de Pagos')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Pagos')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Aplicación Manual Imp. Pendientes')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Aplicación Manual de Importes Pendientes')]").should('be.visible').contains('Aplicación Manual de Importes Pendientes')
      cy.wait(tiempo)
    });

}


SeccionVeintitres(t){
  let tiempo=t
  //FISCALIZACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Fiscalización')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Administración de Talonarios')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Talonarios')]").should('be.visible').contains('Administración de Talonarios')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Fiscalización')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Acta Fiscalización')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Actas Fiscalización')]").should('be.visible').contains('Actas Fiscalización')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Fiscalización')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cargar Acta Fiscalización')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Acta fiscalizaciones')]").should('be.visible').contains('Acta fiscalizaciones')
      cy.wait(tiempo)
    });

}

SeccionVeinticuatro(t){
  let tiempo=t
  //MOVIMIENTO DE FONDOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Movimiento de Fondos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generar Asientos Contables')]").should('be.visible').contains('Generar Asientos Contables')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Movimiento de Fondos')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Informe Movimiento de Fondos')]").should('be.visible').contains('Informe Movimiento de Fondos')
      cy.wait(tiempo)
    });

}


SeccionVeinticinco(t){
  let tiempo=t
  //GENERADOR DE REPORTES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Reportes General')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Paramétricas Excel')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Reporte Mejoras Inmueble')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Padrones Comercio')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Reportes General')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Datos Adicionales Reportes')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}

SeccionVeintiseis(t){
  let tiempo=t
  //INFORME SELLOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Informe Sellos')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Informe Sellos')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionVeintisiete(t){
  let tiempo=t
  //ENVÍO BOLETO MASIVA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionVeintiocho(t){
  let tiempo=t
  //CONSULTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Consulta GAM Data')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Roles')]").invoke('show').click({ force: true });  
      cy.xpath("(//a[contains(.,'Consulta Comercios')])[1]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Consulta Comercios Actividades')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Consulta Inmuebles')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Consulta GAM Users')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}

SeccionVeintinueve(t){
  let tiempo=t
  //PARAMÉTRICAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Documento')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Estado Civil')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Naturaleza Jurídica')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Nacionalidad')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Vínculos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Adjuntos')]").invoke('show').click({ force: true });
      cy.wait(tiempo);
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Países')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Provincias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Departamentos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Localidades/Distritos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Calles')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Barrios')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipos Domicilio')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'ABM Circuitos Disribución')]").invoke('show').click({ force: true });
      cy.wait(tiempo);
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Comportamientos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tributos/Tasas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Conceptos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM SubConceptos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Comportamiento de Obligaciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Vencimiento de Obligaciones')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Función de Cálculo')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Códigos de Cálculo')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Conceptos Cta. Cte.')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Replicar Comportamientos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Excluyentes')]").invoke('show').click({ force: true });
      cy.wait(tiempo);
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Comportamientos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Delegaciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Sectores')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Delegacion/Sector')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Usuario Sector')]").invoke('show').click({ force: true });
      cy.wait(tiempo);
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Recaudación')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipos de Entes Recaudadores')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Entes Recaudadores')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Comisiones Entes Recaudadores')]").invoke('show').click({ force: true });
      cy.wait(tiempo);
      
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Situaciones Especiales')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipos de Situaciones Especiales')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Situaciones Especiales')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

  SeccionTreinta(t){
    let tiempo=t
      cy.wait(1000)
      cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
      cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web2_PO