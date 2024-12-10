import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web3_1_PO {

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

SeccionDiecisiete(t){
  let tiempo=t
  // GESTIÓN DE DEUDA
cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
cy.xpath("(//a[contains(.,'Generar Lote')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });

cy.get('iframe[name="EMBPAGEM"]', { timeout: 30000 })
  .its('0.contentDocument.body')
  .should('not.be.empty')
  .then(cy.wrap)
  .within(() => {
  cy.get('#TITLE', { timeout: 30000 })
  .should('be.visible')
  .contains('Generación de Lote');
  });


    
  cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
  cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Consulta de Lotes')
      
    });

    
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Generar Lote Precargado')
      
    });

    
    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Gestiones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Administración de Gestiones')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Tags')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 30000 }).should('be.visible').contains('Administración de Tags')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Notificaciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }, { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 10000 }).should('be.visible').contains('Administración de Notificaciones')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión Telefónica')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Gestión Telefónica')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Respuesta')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 10000 }).should('be.visible').contains('ABM Respuestas')
    
    });

}


SeccionDieciocho(t){
  let tiempo=t
  //APREMIO
 
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote')])[3]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación de Lote')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Consulta de Lotes')
      
    });


    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración Apremios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Administración de Apremios')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generar Lote Precargado')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Sorteo de Apremio')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Sorteo de Apremios')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cargar Etapa Masiva')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Carga Masiva de Etapas')
      
    });


    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Importar Archivo Etapa')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Importar Archivo Etapas')
      
    });


    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Imprimir Apremio')]", { timeout: 10000 }).invoke('show').click({ force: true });
     
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Impresión Boletas Apremio')
      
    });


    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Recaudadores')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Informes Recaudador')
      
    });

}


SeccionDiecinueve(t){
  let tiempo=t
  //MASIVA
  
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Universos Masiva')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 10000 }).should('be.visible').contains('ABM Universos Masivas')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación Masiva de Obligaciones')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Comprobantes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación Masiva de Comprobantes')
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Muestras de Impresión')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación Archivos de Impresión de Muestras')
      
      
    });

    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Impresión Definitiva')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación Archivos de Impresión Definitivos')
      
    });
      
    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Archivos para Entes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación Archivos Entes')
      
    });
      
    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva de Ascensores')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generacion Masiva Ascensores')
    
    });
      
    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Impresión de PDF de Masiva en Servidor')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Impresión Masiva')
      
    });
      
    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Boleto Digital Masiva')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Boleta Digital Masiva')
      
    });
      
    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Imágen Publicidad Boleto')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 10000 }).should('be.visible').contains('Imagen Publicidad Boleto Masiva')
      
    });
      
   
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Objetos Excluidos Masiva')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Objetos Exluidos Masiva')
      
    });
      
   
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Canastos y Alarmas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generación Masiva Canastos y Alarmas')
      
    });
      
    
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Monitor Masiva')]", { timeout: 10000 }).invoke('show').click({ force: true });   
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Monitoreo Procesos Masiva')
      
    });

}


  SeccionTreinta(t){
    let tiempo=t
      
      cy.get('#USERNAMEINITIALS_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})
      cy.get('#SIGNOUT_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web3_1_PO