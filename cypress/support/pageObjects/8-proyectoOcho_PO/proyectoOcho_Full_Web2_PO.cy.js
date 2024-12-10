import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web2_PO {

  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      // Intercepta una solicitud específica para observar o modificar el comportamiento
      cy.intercept('GET', '**/K2BGAM/servlet/com.k2bgam.*').as('pageLoad');

      // Carga la página
      cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
        timeout: 1800000, // Tiempo máximo de espera aumentado a 30 minutos
        onBeforeLoad: (win) => {
          win.fetch = null;
          console.log('La página está a punto de cargarse');
        },
        onLoad: (win) => {
          console.log('La página se ha cargado completamente');
        },
        waitUntil: 'domcontentloaded', // Esperar solo hasta que el contenido del DOM esté listo
        waitForLoad: false, // No esperar a que se cargue completamente
      });

      // Espera a que la solicitud interceptada se complete antes de continuar
      cy.wait('@pageLoad');
      cy.wait(tiempo);
    });
  }

  

    
  SeccionUno(usuario, contrasena, t) {
    let tiempo = t;
    if (usuario !== "") {
      cy.xpath("//input[contains(@id,'vUSERNAME')]", { timeout: 10000 }).should("be.visible").type(usuario);
    }
    if (contrasena !== "") {
      cy.xpath("//input[contains(@id,'vUSERPASSWORD')]", { timeout: 10000 }).should("be.visible").type(contrasena);
    }
    
    cy.xpath("//input[contains(@id,'LOGIN')]", { timeout: 10000 }).should("be.visible").click();
    
  }
    

SeccionQuince(t){
  let tiempo=t
  //INFORME CAJAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Cajas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Resumen Cobranzas')])[1]").invoke('show').click({ force: true });
      
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resumen Cobranza')]").should('be.visible', { timeout: 5000 }).contains('Resumen Cobranza')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Cajas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resumen Cobranzas por Cajero')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.wait(5000)
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resumenes Cobranzas de Cajeros')]").should('be.visible', { timeout: 5000 }).contains('Resumenes Cobranzas de Cajeros')
      cy.wait(tiempo)
    });

}

SeccionDieciseis(t){
  let tiempo=t
  //JUZGADO DE FALTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Administración de Talonarios')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.wait(5000)
        cy.xpath("//span[contains(.,'Administración de Talonarios')]").should('be.visible', { timeout: 5000 }).contains('Administración de Talonarios')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Nueva Acta de Infracción')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.wait(5000)
        cy.xpath("//span[contains(.,'Nueva Acta de Infracción')]").should('be.visible', { timeout: 5000 }).contains('Nueva Acta de Infracción')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Recursos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
      cy.xpath("//span[contains(.,'Generación de Recursos')]").should('be.visible', { timeout: 30000 }).contains('Generación de Recursos')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Resoluciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Resoluciones juzgado 1')]").should('be.visible', { timeout: 5000 }).contains('ABM Resoluciones juzgado 1')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Editar Resolución')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Editar Resolución')]").should('be.visible', { timeout: 5000 }).contains('Editar Resolución')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Antecedentes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Antecedentes')]").should('be.visible', { timeout: 5000 }).contains('Consulta de Antecedentes')
      cy.wait(tiempo)
    });

    
       cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
       cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
       cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
       cy.xpath("//a[contains(.,'Consulta Resolución Masiva')]").invoke('show').click({ force: true });
       cy.wait(tiempo)
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
       cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
       cy.xpath("//span[contains(.,'Consulta Resoluciones Masivas')]").should('be.visible', { timeout: 5000 }).contains('Consulta Resoluciones Masivas')
       cy.wait(tiempo)
     });

    // SE COMENTA HASTA QUE SOUCIONEN EL TEMA DE LA VISTA (DEMORA + 10 MINUTOS)
    //   cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
    //   cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    //   cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
    //   cy.xpath("//a[contains(.,'Resolución Masiva Pago Voluntario')]").invoke('show').click({ force: true });
    //   cy.wait(tiempo)
    //   cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
    //   cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    //     cy.wait(5000)
    //     cy.xpath("//span[contains(.,'Resolución Masiva Pago Voluntario')]").should('be.visible', { timeout: 10000 }).contains('Resolución Masiva Pago Voluntario')
    //   cy.wait(tiempo)
    // });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Juzgados')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración De Juzgados')]").should('be.visible', { timeout: 5000 }).contains('Administración De Juzgados')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Resolución Masiva')])[3]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Resolución Masiva')]").should('be.visible', { timeout: 5000 }).contains('Resolución Masiva')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Notificación de Recursos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Notificación Recursos')]").should('be.visible', { timeout: 5000 }).contains('Notificación Recursos')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Actas Sin Infractor')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Alta Vinculos Actas')]").should('be.visible', { timeout: 5000 }).contains('Alta Vinculos Actas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Resoluciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Resoluciones')]").should('be.visible', { timeout: 5000 }).contains('Consulta Resoluciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración de Infracciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Resolucion Infracciones')]").should('be.visible', { timeout: 5000 }).contains('Administración de Resolucion Infracciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Lote Cédula')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Lote Cédula')]").should('be.visible', { timeout: 5000 }).contains('Generación Lote Cédula')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración Lote Notificación')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Lotes')]").should('be.visible', { timeout: 5000 }).contains('Administración de Lotes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Cédulas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Cédulas')]").should('be.visible', { timeout: 5000 }).contains('Administración de Cédulas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Recepción y Devolución de Cédula')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Cédulas - Notificaciones')]").should('be.visible', { timeout: 5000 }).contains('Administración de Cédulas - Notificaciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Infracciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM INFRACCIONES')]").should('be.visible', { timeout: 5000 }).contains('ABM INFRACCIONES')
      cy.wait(tiempo)
    });


    //   cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
    //   cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    //   cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
    //   cy.xpath("//a[contains(.,'Resolución de Accidentes')]").invoke('show').click({ force: true });
    //   cy.wait(tiempo)
    //   cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
    //   cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    //   cy.xpath("//span[contains(.,'Resolución Accidentes')]").should('be.visible').contains('Resolución Accidentes')
    //   cy.wait(tiempo)
    // });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM unidad Fija')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Unidad fijas')]").should('be.visible', { timeout: 5000 }).contains('Unidad fijas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Parametro por Juzgado')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Certificado Parámetros')]").should('be.visible', { timeout: 5000 }).contains('Certificado Parámetros')
      cy.wait(tiempo)
    });

}


SeccionDiecisiete(t){
  let tiempo=t
  //GESTIÓN DE DEUDA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Lote')]").should('be.visible', { timeout: 5000 }).contains('Generación de Lote')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Lotes')]").should('be.visible', { timeout: 5000 }).contains('Consulta de Lotes')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generar Lote Precargado')]").should('be.visible', { timeout: 5000 }).contains('Generar Lote Precargado')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Gestiones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Gestiones')]").should('be.visible', { timeout: 5000 }).contains('Administración de Gestiones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Tags')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Tags')]").should('be.visible', { timeout: 5000 }).contains('Administración de Tags')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Notificaciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Notificaciones')]").should('be.visible', { timeout: 5000 }).contains('Administración de Notificaciones')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión Telefónica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Gestión Telefónica')]").should('be.visible', { timeout: 5000 }).contains('Gestión Telefónica')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Respuesta')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Respuestas')]").should('be.visible', { timeout: 5000 }).contains('ABM Respuestas')
      cy.wait(tiempo)
    });

}


  SeccionTreinta(t){
    let tiempo=t
    
    cy.get('#USERNAMEINITIALS_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})
    cy.get('#SIGNOUT_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web2_PO