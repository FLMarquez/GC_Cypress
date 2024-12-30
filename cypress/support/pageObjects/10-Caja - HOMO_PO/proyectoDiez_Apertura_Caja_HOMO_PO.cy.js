import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');
class PoyectoDiez_Apertura_Caja_HOMO_Po{

  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.visit('https://gcdigitalhomo.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
        timeout: 300000, // Tiempo máximo de espera en milisegundos
        onBeforeLoad: (win) => {
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
    
      SeccionUno(usuario, contrasena,ambiente, t) {
        let tiempo = t;
        if (usuario !== "") {
          cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible").type(usuario);
        }
        if (contrasena !== "") {
          cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible").type(contrasena);
        }

        if (ambiente !== "") {
        cy.get('#vAPPENVNAME').select(ambiente, { force: true});
        
        }
        
        cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible").click();
        
      }
    
      SeccionDos(cajero, caja, clave, t) {
        let tiempo = t;
    
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 })
        .should("be.visible")
        .click();

        cy.get('span.sidebar-nav-item', { timeout: 10000 })
        .should("be.visible")
        .contains('Tributario Faro')
        .click({ force: true });

        cy.xpath("(//a[contains(.,'Cajas')])[1]", { timeout: 10000 })
        .invoke('show')
        .click({ force: true });

        cy.xpath("//a[contains(.,'Apertura de Caja')]", { timeout: 100000 })
        .invoke('show')
        .click({ force: true });
    
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        
        cy.xpath("//span[contains(.,'Apertura de Caja')]", { timeout: 15000 })
        .should('be.visible')
        .contains('Apertura de Caja');

        cy.xpath("(//label[contains(.,'Cajero')])[1]", { timeout: 10000 }).should('be.visible').contains('Cajero');
        cy.xpath("//label[contains(.,'Caja')]", { timeout: 10000 }).should('be.visible').contains('Caja');
        cy.xpath("//label[contains(.,'Fecha Cobro')]", { timeout: 10000 }).should('be.visible').contains('Fecha Cobro');
        cy.xpath("//span[contains(@id,'CODIGOAUTORIZACION')]", { timeout: 10000 }).should('be.visible').contains('Clave del Cajero');
    
        cy.get('#ACEPTAR', { timeout: 10000 }).should('be.visible');

        cy.get("#vCAJEROID", { timeout: 10000 }).should('be.visible').select(cajero, { force: true });

        
        cy.get("#vCAJAID", { timeout: 10000 }).should('be.visible').select(caja, { force: true });
        cy.get("#vCODIGOAUTORIZACION", { timeout: 10000 })
        .should('exist') 
            .and('be.visible') 
            .invoke('show') 
            .clear()
            .type(clave, { delay: 100 });
    
        cy.get('#ACEPTAR', { timeout: 10000 }).should('be.visible').click({ force: true });

        cy.iframe('#gxp0_ifrm').should('exist', { timeout: 10000 }).then($iframe => {
          cy.wrap($iframe)
          .xpath("//span[contains(.,'Apertura Autorizada - Puesto Diario Abierto')]").should('be.visible', { timeout: 10000 })
          .contains('Apertura Autorizada - Puesto Diario Abierto')
          .xpath("//input[contains(@id,'ACTION')]").should('be.visible', { timeout: 10000 }).click({force: true})
          cy.wait(tiempo)
          });
  
          cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES').should('be.visible', { timeout: 10000 }).contains('Datos Caja-Cajero')
          cy.wait(tiempo)
          
          cy.get('#TABLE_CONTAINER_CAANROCAJA > .form-group > .gx-label').should('be.visible', { timeout: 10000 }).contains('Identificación Caja')
          cy.wait(tiempo)
          
          cy.xpath("//span[contains(@id,'TEXTBLOCK_VAR_CJDFECHAAPERTURA')]").should('be.visible', { timeout: 10000 }).contains('Fecha Apertura')
          cy.wait(tiempo)
          
          cy.xpath("//span[contains(@id,'ATTRIBUTES1')]").should('be.visible', { timeout: 10000 }).contains('Datos Pagos')
          cy.wait(tiempo)
          cy.xpath("//label[contains(.,'Código de Barra')]").should('be.visible', { timeout: 10000 }).contains('Código de Barra')
          cy.wait(tiempo)
          cy.xpath("//span[contains(@id,'CDPBOANROREGISTRO')]").should('be.visible', { timeout: 10000 }).contains('Nro. Comprobante')
          cy.wait(tiempo)
          cy.xpath("//span[contains(.,'Boleto')]").should('be.visible').contains('Boleto')
          cy.wait(tiempo)
          cy.xpath("(//span[contains(.,'Importe')])[1]").should('be.visible', { timeout: 10000 }).contains('Importe')
          cy.wait(tiempo)
          cy.xpath("//label[contains(.,'Total a Pagar')]").should('be.visible', { timeout: 10000 }).contains('Total a Pagar')
          cy.wait(tiempo)
          cy.xpath("//label[@for='vSALDOMP']").should('be.visible', { timeout: 10000 }).contains('Saldo')
          cy.wait(tiempo)
  
          cy.xpath("//span[contains(.,'Medios de Pago')]").should('be.visible', { timeout: 10000 }).contains('Medios de Pago');
          cy.wait(tiempo)
          cy.xpath("(//span[contains(.,'Medio de Pago')])[1]").should('be.visible', { timeout: 10000 }).contains('Medio de Pago')
          cy.wait(tiempo)
          cy.xpath("//label[@for='vMNDID']").should('be.visible', { timeout: 10000 }).contains('Moneda')
          cy.wait(tiempo)
          cy.xpath("//span[contains(@id,'MTOREDONDEO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Redondeo')
          cy.wait(tiempo)
          cy.xpath("//span[contains(@id,'MTOCONTADO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Monto')
          cy.wait(tiempo)
          cy.xpath("//span[contains(@id,'MTOVUELTO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Vuelto')
          cy.wait(tiempo)
          cy.xpath("//span[contains(@id,'TOTALCDO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Total')
          cy.wait(tiempo)
          
          cy.get('#BUTTON6').should('be.visible', { timeout: 10000 })
          cy.wait(tiempo) 
          
          cy.xpath("(//span[contains(.,'Medio de Pago')])[3]").should('be.visible', { timeout: 10000 }).contains('Medio de Pago')
          cy.wait(tiempo)
          cy.xpath("//span[contains(.,'Importe Asignado')]").should('be.visible', { timeout: 10000 }).contains('Importe Asignado')
          cy.wait(tiempo)
  
          cy.get('#BTNGRABARPAGO').should('be.visible', { timeout: 10000 })
          cy.wait(tiempo) 
          cy.get('#BUTTON7').should('be.visible', { timeout: 10000 })
          cy.wait(tiempo) 
          //});

        });
    
      }

      // Nuevo método para llenar el código de barras
      llenarCodigoDeBarras(codigo, t) {
        let tiempo = t;
    
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.get('#vCDPCODIGOBARRA', { timeout: 10000 }) // Asegúrate de que el selector sea correcto
                .should('be.visible')
                .and('not.be.disabled') // Verifica que el campo esté habilitado
                .type(codigo, { delay: 100 }); // Simula una escritura con retraso
            cy.wait(tiempo);
            
            cy.get('#CODBARRA').should('be.visible').click({ force: true }); // Asegúrate de que el botón es clickeable
            cy.wait(tiempo);
        });
    }
    

    SeccionTres(medioPago,moneda,t) {
      let tiempo = t;
      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//select[contains(@id,'vMPGID')]").select(medioPago, { force: true})
      cy.wait(tiempo)
      cy.xpath("//select[contains(@id,'vMNDID')]").select(moneda, { force: true})
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'BUTTON6')]").should('be.visible', { timeout: 10000 }).click({force: true})
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'BTNGRABARPAGO')]").should('be.visible', { timeout: 10000 }).click({force: true})
      cy.wait(tiempo)    

      cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.get('iframe[id="gxp0_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Desea confirmar el pago?');
      return true; // Esto simula hacer clic en "Aceptar"
    });
  });

  });

});

}
    SeccionCuatro(t) {
      let tiempo = t;
    cy.get('iframe[id="gxp0_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
    cy.xpath("//span[contains(@id,'TEXTBLOCK')]").should('be.visible', { timeout: 10000 });
      
      // Verifica que el texto contenga 'El pago se realizó con éxito'
      cy.xpath("//span[contains(@id,'TEXTBLOCK')]").contains('El pago se realizó con éxito').should('be.visible', { timeout: 10000 });
  
      // Interactúa con el botón
      cy.xpath("//input[contains(@id,'BUTTON1')]").should('be.visible', { timeout: 10000 }).click({ force: true });
      });

 /*  cy.iframe('#gxp1_ifrm').should('exist').then($iframe => {
  cy.wrap($iframe)
  cy.xpath("//span[@class='Label'][contains(.,'El pago se realizó con éxito')]").invoke('show').click({force: true}).contains('El pago se realizó con éxito');
  cy.wait(tiempo)
  cy.get('#gxp0_gxtitle').parent() // Navega al contenedor padre del popup
  .contains('Aceptar') // Busca el botón "Aceptar"
  .click(); // Haz clic en el botón "Aceptar" 
  }); */

        cy.wait(tiempo)

        cy.get('#USERINITIALSTEXTBLOCKSMALL_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
        

      }
      
        
    }//final

export default PoyectoDiez_Apertura_Caja_HOMO_Po