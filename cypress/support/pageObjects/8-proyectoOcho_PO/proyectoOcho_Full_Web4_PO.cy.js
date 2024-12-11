import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web4_PO {

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
    

SeccionVeinticuatro(t){
  let tiempo=t
  //MOVIMIENTO DE FONDOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Movimiento de Fondos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Generar Asientos Contables')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Movimiento de Fondos')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Informe Movimiento de Fondos')
    
    });

}


SeccionVeinticinco(t){
  let tiempo=t
  //GENERADOR DE REPORTES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Reportes General')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Reportes Generales')
      
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Paramétricas Excel')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES', { timeout: 30000 }).should('be.visible').contains('Paramétricas Salida a Excel')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Reporte Mejoras Inmueble')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 2000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
         cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Reporte Gral. Mejoras Inmuebles')
      
    });

    // SE COMENTA PORQUE TIENE UNA DEMORA DE + DE 10 MINUTOS LA CONSULTA
    //   cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 10000 }).click();
    //   cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    //   cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
    //   cy.xpath("//a[contains(.,'Padrones Comercio')]").invoke('show').click({ force: true }); 
    //   cy.wait(tiempo)
    //   cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
    //   cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    //   cy.xpath("//span[contains(.,'Reporte Gral Padrones de Comercio')]").should('be.visible', { timeout: 10000 }).contains('Reporte Gral Padrones de Comercio')
    //   cy.wait(tiempo)
    // });
      

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Reportes General')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 30000 }).should('be.visible').contains('ABM Reportes Generales')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Datos Adicionales Reportes')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 30000 }).should('be.visible').contains('ABM Datos Adicionales Reportes')
      
    });

}

SeccionVeintiseis(t){
  let tiempo=t
  //INFORME SELLOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Informe Sellos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Informe Sellos')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Informe Sellos')
      
    });

}

SeccionVeintisiete(t){
  let tiempo=t
  //ENVÍO BOLETO MASIVA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Boleta Digital Masiva')
      
    });

}

SeccionVeintiocho(t){
  let tiempo=t
  //CONSULTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta GAM Data')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES', { timeout: 30000 }).should('be.visible').contains('Consulta Usuarios - Roles GAM')
     
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Roles')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES', { timeout: 30000 }).should('be.visible').contains('Consulta Roles GAM')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consulta Comercios')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Consulta Comercios')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Comercios Actividades')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE', { timeout: 30000 }).should('be.visible').contains('Consulta Comercios Actividades')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Inmuebles')]", { timeout: 10000 }).invoke('show').click({ force: true }); 
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES', { timeout: 30000 }).should('be.visible').contains('Consulta Inmueble')
      
    });
      

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta GAM Users')]", { timeout: 10000 }).invoke('show').click({ force: true });  
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES', { timeout: 30000 }).should('be.visible').contains('Consulta Usuarios - Roles GAM')
      
    });

}

SeccionVeintinueve(t){
  let tiempo=t
  //PARAMÉTRICAS
  cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
  cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
        cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'ABM Tipo Documento')]").invoke('show').click({ force: true }); 
        
        cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
        cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipos de Documento')]", { timeout: 30000 }).should('be.visible').contains('ABM Tipos de Documento')
        
      });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Estado Civil')]", { timeout: 10000 }).invoke('show').click({ force: true }); 
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Estado Civil')]", { timeout: 30000 }).should('be.visible').contains('ABM Estado Civil')
      
    });
      


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Naturaleza Jurídica')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Naturaleza Jurídica')]", { timeout: 30000 }).should('be.visible').contains('ABM Naturaleza Jurídica')
      
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Nacionalidad')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Nacionalidades')]", { timeout: 30000 }).should('be.visible').contains('ABM Nacionalidades')
      
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Vínculos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipo de Vínculos')]", { timeout: 30000 }).should('be.visible').contains('ABM Tipo de Vínculos')
      
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Adjuntos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Tipo Adjuntos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('Tipo Adjuntos')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Adjuntos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Tipo Adjuntos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('Tipo Adjuntos')
      
    });

    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Países')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Paises')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Paises')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Provincias')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Provincias')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Provincias')
      
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Departamentos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Departamentos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Departamentos')
      
    });
     


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Localidades/Distritos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Localidades /Distritos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Localidades /Distritos')
      
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Calles')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Calles')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Calles')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Barrios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Barrios')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Barrios')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipos Domicilio')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tipo de Domicilio')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tipo de Domicilio')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });  
    cy.xpath("//a[contains(.,'Config. Domicilios')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Circuitos Disribución')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Circuitos de Distribución')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Circuitos de Distribución')
      
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Tributos/Tasas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Tributos/Tasas')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Tributos/Tasas')
      
    });


    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("(//a[contains(.,'ABM Conceptos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'ABM Conceptos')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Conceptos')
      
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Comportamientos')]", { timeout: 10000 }).invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM SubConceptos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
       cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
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
        cy.xpath("//span[contains(.,'ABM Entes Recaudadores')]", { timeout: 30000 }).should('exist').and('be.visible').contains('ABM Entes Recaudadores')
      
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


}

  SeccionTreinta(t){
    let tiempo=t
    
    cy.get('#USERNAMEINITIALS_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})
    cy.get('#SIGNOUT_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web4_PO