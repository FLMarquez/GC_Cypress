import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web1_2_PO {

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
    
      
SeccionNueve(t){
  let tiempo=t
  //TASA VARIAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]')
      .should('exist') 
      .and('be.visible') 
      .invoke('show') 
      .click({ force: true });

      cy.get('span.sidebar-nav-item')
      .should("be.visible")
      .contains('Tributario Faro')
      .click({ force: true });

      cy.xpath("(//a[contains(.,'Tasas Varias')])[2]")
      .should('exist') 
      .invoke('show') 
      .click({ force: true });

      cy.xpath("//a[contains(.,'Generar Tasas Varias')]")
      .should('exist') 
      .invoke('show') 
      .click({ force: true });

      
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Tasas Varias')]")
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tasas Varias')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Orden de Compra')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Tasas Varias')]").should('be.visible', { timeout: 5000 }).contains('Generación de Tasas Varias')
      cy.wait(tiempo)
    });

}

SeccionDiez(t){
  let tiempo=t
  //CONFIGURACIÓN TASA VARIAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tasas Varias')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Tasas Varias')]").should('be.visible', { timeout: 5000 }).contains('ABM Tasas Varias')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Valores Tasas Varias')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Valores Tasas Varia')]").should('be.visible', { timeout: 5000 }).contains('ABM Valores Tasas Varia')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Función de Cálculo')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Funcion de Cálculo')]").should('be.visible', { timeout: 5000 }).contains('ABM Funcion de Cálculo')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tasas Sector')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'ABM Tasa Sector')]").should('be.visible', { timeout: 5000 }).contains('ABM Tasa Sector')
      cy.wait(tiempo)
    });

}

SeccionOnce(t){
  let tiempo=t
  //PLANES DE PAGO
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Planes de Pago')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Planes de Pago')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consultar Planes de Pago')]").should('be.visible', { timeout: 5000 }).contains('Consultar Planes de Pago')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Planes de Pago')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Comprobantes Planes de Pago')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Comprobantes Plan de Pago')]").should('be.visible', { timeout: 5000 }).contains('Consulta Comprobantes Plan de Pago')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Planes de Pago')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Plan de Pago Especial')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Plan de Pago Especial')]").should('be.visible', { timeout: 5000 }).contains('Plan de Pago Especial')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Planes de Pago')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Reimprimir Chequera')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Reimprimir Chequera Plan')]").should('be.visible', { timeout: 5000 }).contains('Reimprimir Chequera Plan')
      cy.wait(tiempo)
    });

}


SeccionDoce(t){
  let tiempo=t
  //AJUSTE CTA CTE
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Cta. Cte.')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Masivo Cta. Cte.')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }, { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Ajuste Masivo Cta. Cte.')]").should('be.visible', { timeout: 5000 }).contains('Ajuste Masivo Cta. Cte.')
      cy.wait(tiempo)
    });
      
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Cta. Cte.')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Manual Cta. Cte.')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Ajuste Manual de Cuenta Corriente')]").should('be.visible', { timeout: 5000 }).contains('Ajuste Manual de Cuenta Corriente')
      cy.wait(tiempo)
    });
      
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Cta. Cte.')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cancelación Masiva de Obligaciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Cancelación Masiva de Obligaciones')]").should('be.visible', { timeout: 5000 }).contains('Cancelación Masiva de Obligaciones')
      cy.wait(tiempo)
    });

}
 

SeccionTrece(t){
  let tiempo=t
  //EXENCIONES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Exenciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Vínculos Situación Especial')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Vinculos Situación Especial')]").should('be.visible', { timeout: 5000 }, { timeout: 5000 }).contains('Vinculos Situación Especial')
      cy.wait(tiempo)
    });

}

SeccionCatorce(t){
  let tiempo=t
  //CAJAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Cajas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Apertura de Caja')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Apertura de Caja')]").should('be.visible', { timeout: 5000 }).contains('Apertura de Caja')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Cajas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Registrar Cobranza')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Registrar Cobranza')]").should('be.visible', { timeout: 5000 }).contains('Registrar Cobranza')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Cajas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cierre de Caja')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Cierre de Caja')]").should('be.visible', { timeout: 5000 }).contains('Cierre de Caja')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Cajas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Anular Cupón')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Anular Cupón')]").should('be.visible', { timeout: 5000 }).contains('Anular Cupón')
      cy.wait(tiempo)
    });



      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
    cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Cajas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Reimpresión Ticket')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe', { timeout: 5000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Reimpresión Ticket')]").should('be.visible', { timeout: 5000 }).contains('Reimpresión Ticket')
      cy.wait(tiempo)
    });
}


  SeccionTreinta(t){
    let tiempo=t
    
    cy.get('#USERNAMEINITIALS_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})
    cy.get('#SIGNOUT_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web1_2_PO