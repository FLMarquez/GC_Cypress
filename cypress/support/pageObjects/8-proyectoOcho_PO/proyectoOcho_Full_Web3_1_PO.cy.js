import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web3_1_PO {

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


  SeccionTreinta(t){
    let tiempo=t
      cy.wait(1000)
      cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
      cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web3_1_PO