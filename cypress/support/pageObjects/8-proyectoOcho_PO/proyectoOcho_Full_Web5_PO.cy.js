import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web5_PO {

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

  SeccionDos(t){
    let tiempo=t
    //PARAMÉTRICAS
  cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM SubConceptos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    

    cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Subconceptos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Subconceptos')
        
      });
      
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
     cy.xpath("//a[contains(.,'ABM Comportamiento de Obligaciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Obligaciones Comportamiento')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Obligaciones Comportamiento')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Vencimiento de Obligaciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Obligaciones Comportamientos Vencimientos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Obligaciones Comportamientos Vencimientos')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("(//a[contains(.,'ABM Función de Cálculo')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Funcion de Cálculo')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Funcion de Cálculo')
      
    });

      
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Códigos de Cálculo')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Código Cálculo')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Código Cálculo')
      
    });

      
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Conceptos Cta. Cte.')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Conceptos de Cuenta Corriente')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Conceptos de Cuenta Corriente')
      
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Replicar Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Replicar Comportamientos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('Replicar Comportamientos')
      
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Generar Excluyentes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Replicar Comportamientos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('Replicar Comportamientos')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Delegacion/Sector')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Delegaciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Delegaciones')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Delegaciones')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Delegacion/Sector')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Sectores')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Sectores')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Sectores')
      
    });
      

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Delegacion/Sector')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Delegacion/Sector')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Delegación/Sector')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Delegación/Sector')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Delegacion/Sector')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Usuario Sector')]", { timeout: 10000 }).invoke('show').click({ force: true });
     
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Usuario - Delegación/Sector')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Usuario - Delegación/Sector')
      
    });

      
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Recaudación')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Tipos de Entes Recaudadores')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipos Entes Recaudadores')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tipos Entes Recaudadores')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Recaudación')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Entes Recaudadores')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Entes Recaudadores')]", { timeout: 30000 }).should('be.visible').contains('ABM Entes Recaudadores')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Recaudación')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Comisiones Entes Recaudadores')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Comisiones Entes Recaudadores')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Comisiones Entes Recaudadores')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Situaciones Especiales')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Tipos de Situaciones Especiales')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipo de Situación Especial')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tipo de Situación Especial')
      
    });
      
    
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Situaciones Especiales')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Situaciones Especiales')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Situaciones Especiales')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Situaciones Especiales')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Parámetros Generales')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Parámetros Generales')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Parámetros Generales')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Parámetros Generales')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Parámetros Generales')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Parametrizaciones Masivas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Parametrizaciones Masivas')]", { timeout: 30000 }).should('exist').and('be.visible').contains('Parametrizaciones Masivas')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comercio')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Actividades')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Actividades')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Actividades')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comercio')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Rubros')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Rubros Actividades')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Rubros Actividades')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comercio')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Cartel Publicitario')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipo Cartel Publicitario')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tipo Cartel Publicitario')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Cajas')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Cajas')]", { timeout: 10000 }).invoke('show').eq(0).click({ force: true });
      
    cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
    cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    cy.xpath("//span[contains(.,'ABM Cajas')]", { timeout: 30000 }).should('be.visible').contains('ABM Cajas')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Cajas')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Medios de Pago')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Medios de Pago')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Medios de Pago')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Cajas')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Cajeros')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Cajeros')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Cajeros')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Apremios')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Tipos Liquidaciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipos de Liquidaciones')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tipos de Liquidaciones')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Apremios')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Tipos Liquidaciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipos de Liquidaciones')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tipos de Liquidaciones')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Apremios')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Recaudadores')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Recaudadores')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Recaudadores')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Apremios')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Etapas')]", { timeout: 10000 }).invoke('show').eq(0).click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Etapas')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Etapas')
      
    });
    

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Apremios')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Gastos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Gastos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Gastos')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Días No Laborables')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Días No Laborables')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Dias no Laborables')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Dias no Laborables')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Planes de Pago')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Planes de Pago')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Configuración Planes de Pagos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Configuración Planes de Pagos')
      
    });

    
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Planes de Pago')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Índices Actualización')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Indices Actualización')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Indices Actualización')
      
    });



}

  SeccionTres(t){
    let tiempo=t
    
    cy.get('#USERNAMEINITIALS_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})
    cy.get('#SIGNOUT_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web5_PO