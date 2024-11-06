import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web3_2_PO {

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
          cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible", { timeout: 5000 }).type(usuario);
        }
        if (contrasena !== "") {
          cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible", { timeout: 5000 }).type(contrasena);
        }
        cy.wait(tiempo);
        cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible", { timeout: 5000 }).click();
        cy.wait(tiempo);
      }


SeccionVeinte(t){
  let tiempo=t
  //TRIBUNAL DE CUENTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Informes de Tribunal de Cuentas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe[name="EMBPAGEM"]', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Generación Informes Tribunal de Cuentas')]").should('be.visible', { timeout: 30000 }).contains('Generación Informes Tribunal de Cuentas')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Importar Juicios Jurídica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Importar Juicios Jurídica')]").should('be.visible', { timeout: 30000 }, { timeout: 30000 }).contains('Importar Juicios Jurídica')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Excel Jurídica')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Consulta Archivos Juicios Juridica')]").should('be.visible', { timeout: 30000 }).contains('Consulta Archivos Juicios Juridica')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de estado de gestión de cobranza')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Informe de estado de gestión de cobranza')]").should('be.visible', { timeout: 30000 }).contains('Informe de estado de gestión de cobranza')
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
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Obras Particulares')]").should('be.visible', { timeout: 30000 }).contains('Obras Particulares')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva de Ascensores')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Generacion Masiva Ascensores')]").should('be.visible', { timeout: 30000 }).contains('Generacion Masiva Ascensores')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Anular Obra Particular')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Anulación Aforo Obras Particulares')]").should('be.visible', { timeout: 30000 }).contains('Anulación Aforo Obras Particulares')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Permisos de Conexión')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Permiso conexiones')]").should('be.visible', { timeout: 30000 }).contains('Permiso conexiones')
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
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Desaplicación de Pagos')]").should('be.visible', { timeout: 30000 }, { timeout: 30000 }).contains('Desaplicación de Pagos')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Pagos')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Aplicación Manual Imp. Pendientes')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Aplicación Manual de Importes Pendientes')]").should('be.visible', { timeout: 30000 }).contains('Aplicación Manual de Importes Pendientes')
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
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Administración de Talonarios')]").should('be.visible', { timeout: 30000 }).contains('Administración de Talonarios')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Fiscalización')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Acta Fiscalización')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Actas Fiscalización')]").should('be.visible', { timeout: 30000 }).contains('Actas Fiscalización')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Fiscalización')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cargar Acta Fiscalización')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Acta fiscalizaciones')]").should('be.visible', { timeout: 30000 }).contains('Acta fiscalizaciones')
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

export default proyectoOcho_Full_Web3_2_PO