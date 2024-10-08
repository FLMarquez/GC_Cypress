import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web4_PO {

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
    

SeccionVeinticuatro(t){
  let tiempo=t
  //MOVIMIENTO DE FONDOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Movimiento de Fondos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generar Asientos Contables')]").should('be.visible').contains('Generar Asientos Contables')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Movimiento de Fondos')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
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
      cy.xpath("(//a[contains(.,'Reportes General')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Reportes Generales')]").should('be.visible').contains('Reportes Generales')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Paramétricas Excel')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Paramétricas Salida a Excel')]").should('be.visible').contains('Paramétricas Salida a Excel')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Reporte Mejoras Inmueble')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Reporte Gral. Mejoras Inmuebles')]").should('be.visible').contains('Reporte Gral. Mejoras Inmuebles')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Padrones Comercio')]").invoke('show').click({ force: true }); 
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Reporte Gral Padrones de Comercio')]").should('be.visible').contains('Reporte Gral Padrones de Comercio')
      cy.wait(tiempo)
    });
      

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Reportes General')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Reportes Generales')]").should('be.visible').contains('ABM Reportes Generales')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Datos Adicionales Reportes')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Datos Adicionales Reportes')]").should('be.visible').contains('ABM Datos Adicionales Reportes')
      cy.wait(tiempo)
    });

}

SeccionVeintiseis(t){
  let tiempo=t
  //INFORME SELLOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Informe Sellos')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Informe Sellos')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Informe Sellos')]").should('be.visible').contains('Informe Sellos')
      cy.wait(tiempo)
    });

}

SeccionVeintisiete(t){
  let tiempo=t
  //ENVÍO BOLETO MASIVA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Boleta Digital Masiva')]").should('be.visible').contains('Boleta Digital Masiva')
      cy.wait(tiempo)
    });

}

SeccionVeintiocho(t){
  let tiempo=t
  //CONSULTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta GAM Data')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Usuarios - Roles GAM')]").should('be.visible').contains('Consulta Usuarios - Roles GAM')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Roles')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Roles GAM')]").should('be.visible').contains('Consulta Roles GAM')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consulta Comercios')])[1]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Comercios')]").should('be.visible').contains('Consulta Comercios')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Comercios Actividades')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Comercios Actividades')]").should('be.visible').contains('Consulta Comercios Actividades')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Inmuebles')]").invoke('show').click({ force: true }); 
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Inmueble')]").should('be.visible').contains('Consulta Inmueble')
      cy.wait(tiempo)
    });
      

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta GAM Users')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Usuarios - Roles GAM')]").should('be.visible').contains('Consulta Usuarios - Roles GAM')
      cy.wait(tiempo)
    });

}

SeccionVeintinueve(t){
  let tiempo=t
  //PARAMÉTRICAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Documento')]").invoke('show').click({ force: true }); 
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Tipos de Documento')]").should('be.visible').contains('ABM Tipos de Documento')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Estado Civil')]").invoke('show').click({ force: true }); 
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Estado Civil')]").should('be.visible').contains('ABM Estado Civil')
      cy.wait(tiempo)
    });
      


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Naturaleza Jurídica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Naturaleza Jurídica')]").should('be.visible').contains('ABM Naturaleza Jurídica')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Nacionalidad')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Nacionalidades')]").should('be.visible').contains('ABM Nacionalidades')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Vínculos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Tipo de Vínculos')]").should('be.visible').contains('ABM Tipo de Vínculos')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Adjuntos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Tipo Adjuntos')]").should('be.visible').contains('Tipo Adjuntos')
      cy.wait(tiempo)
    });



    cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
    cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
    cy.xpath("//a[contains(.,'ABM Países')]").invoke('show').click({ force: true });
    cy.wait(tiempo)
    cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
    cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
    cy.xpath("//span[contains(.,'ABM Paises')]").should('be.visible').contains('ABM Paises')
    cy.wait(tiempo)
  });


  cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
  cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
  cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
  cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
  cy.xpath("//a[contains(.,'ABM Provincias')]").invoke('show').click({ force: true });
  cy.wait(tiempo)
  cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
  cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
  cy.xpath("//span[contains(.,'ABM Provincias')]").should('be.visible').contains('ABM Provincias')
  cy.wait(tiempo)
});

      
cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'ABM Departamentos')]").invoke('show').click({ force: true });
cy.wait(tiempo)
cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
cy.xpath("//span[contains(.,'ABM Departamentos')]").should('be.visible').contains('ABM Departamentos')
cy.wait(tiempo)
});


cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'ABM Localidades/Distritos')]").invoke('show').click({ force: true });
cy.wait(tiempo)
cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
cy.xpath("//span[contains(.,'ABM Localidades /Distritos')]").should('be.visible').contains('ABM Localidades /Distritos')
cy.wait(tiempo)
});
      


cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'ABM Calles')]").invoke('show').click({ force: true });
cy.wait(tiempo)
cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
cy.xpath("//span[contains(.,'ABM Calles')]").should('be.visible').contains('ABM Calles')
cy.wait(tiempo)
});

     

cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'ABM Barrios')]").invoke('show').click({ force: true });
cy.wait(tiempo)
cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
cy.xpath("//span[contains(.,'ABM Barrios')]").should('be.visible').contains('ABM Barrios')
cy.wait(tiempo)
});


    
cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'ABM Tipos Domicilio')]").invoke('show').click({ force: true });
cy.wait(tiempo)
cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
cy.xpath("//span[contains(.,'ABM Tipo de Domicilio')]").should('be.visible').contains('ABM Tipo de Domicilio')
cy.wait(tiempo)
});


cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
cy.xpath("//a[contains(.,'ABM Circuitos Disribución')]").invoke('show').click({ force: true });
cy.wait(tiempo)
cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
cy.xpath("//span[contains(.,'ABM Circuitos de Distribución')]").should('be.visible').contains('ABM Circuitos de Distribución')
cy.wait(tiempo)
});
     

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

export default proyectoOcho_Full_Web4_PO