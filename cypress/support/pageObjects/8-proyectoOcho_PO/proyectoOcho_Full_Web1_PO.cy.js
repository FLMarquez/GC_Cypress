import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web1_PO {

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
    
      SeccionDos(t) {
        let tiempo = t;
        // PERSONAS
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
        cy.xpath("(//a[contains(.,'Personas')])[1]").should("be.visible").click({ force: true });
        cy.xpath("//a[contains(.,'Administración de Personas')]").invoke('show').click({ force: true });
    
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.xpath("//span[contains(.,'Administración de Personas')]").should('be.visible').contains('Administración de Personas');
            cy.wait(tiempo);
        });
    
        cy.xpath("//a[contains(.,'Gestión del Ciudadano')]").invoke('show').click({ force: true });
        cy.wait(tiempo);
    
        cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.xpath("//span[contains(.,'Gestión del Ciudadano')]").should('be.visible').contains('Gestión del Ciudadano');
            cy.wait(tiempo);
        });
    
        cy.xpath("//a[contains(.,'Unificación de CUIT')]").invoke('show').click({ force: true });
        cy.wait(tiempo);
        cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.xpath("//span[contains(.,'Unificación de Domicilio por Cuit')]").should('be.visible').contains('Unificación de Domicilio por Cuit');
            cy.wait(tiempo);
        });
    }
     


      SeccionTres(t){
           let tiempo=t
        //OBJETOS
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
        cy.xpath("(//a[contains(.,'Consultar Objetos')])[1]").invoke('show').click({ force: true }); 
        cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.xpath("//span[contains(.,'Consultar Objetos')]").should('be.visible').contains('Consultar Objetos');
            cy.wait(tiempo);
        });
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Actividades Comercio')]").invoke('show').click({ force: true }); 
        cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Administración de Comercios y Actividades')]").should('be.visible').contains('Administración de Comercios y Actividades')
        cy.wait(tiempo)
       
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Reactivar Comercio')]").invoke('show').click({ force: true });
        cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Reactivar Comercio')]").should('be.visible').contains('Reactivar Comercio')
        cy.wait(tiempo)
        cy.wait(tiempo);
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Fraccionamiento')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Fraccionamiento')]").should('be.visible').contains('Fraccionamiento')
      cy.wait(tiempo)
       
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Unificación')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Unificación')]").should('be.visible').contains('Unificación')
      cy.wait(tiempo)

      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Multicuentas')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Multicuentas')]").should('be.visible').contains('Multicuentas')
      cy.wait(tiempo)
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Operaciones Catastro')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consultar Operación Catastro')]").should('be.visible').contains('Consultar Operación Catastro')
      cy.wait(tiempo)
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Objetos por Domicilio')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Búsqueda de Objetos por domicilio')]").should('be.visible').contains('Búsqueda de Objetos por domicilio')
      cy.wait(tiempo)
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Objetos con más de 30 Vínculos')]").invoke('show').click({ force: true });    
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Personas - Vínculos Activos > 30')]").should('be.visible').contains('Personas - Vínculos Activos > 30')
      cy.wait(tiempo)
      });

      }


      SeccionCuatro(t){
        let tiempo=t
        //EMISIÓN DE DEUDA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Atención Primaria')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Atención Primaria')]").should('be.visible').contains('Atención Primaria')
      cy.wait(tiempo)
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión Deuda Apremios Múltiples')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Impresión Boletas Apremio')]").should('be.visible').contains('Impresión Boletas Apremio')
      cy.wait(tiempo)
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Comprobantes')]").invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Comprobantes')]").should('be.visible').contains('Consulta de Comprobantes')
      cy.wait(tiempo)
      });


    }
           
      SeccionCinco(t){
         let tiempo=t
         //CUENTA CORRIENTE
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Cuenta Corriente')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Cta. Cte.')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
      cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Cuenta Corriente')]").should('be.visible').contains('Consulta Cuenta Corriente')
      cy.wait(tiempo)
      });

    }

    SeccionSeis(t){
      let tiempo=t
      //OBLIGACIONES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obligaciones')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Simular y Generar Obligaciones')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Simular y Generar Obligaciones Correlativas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

 }

 SeccionSiete(t){
  let tiempo=t
  //RECAUDACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(text(), 'Importar Archivo de Pago')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Rendiciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Rendición Manual de Pagos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Archivos SUGIT')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(text(),'Reporte Estacionamiento Medido')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}
  

SeccionOcho(t){
  let tiempo=t
  //INFORMES DE RECAUDACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Informe de Recaudación por Fecha')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación por Imputación Contable')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación de Tasas Varias')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}


SeccionNueve(t){
  let tiempo=t
  //TASA VARIAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tasas Varias')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Generar Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Orden de Compra')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionDiez(t){
  let tiempo=t
  //CONFIGURACIÓN TASA VARIAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración Tasas Varias')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'ABM Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Valores Tasas Varias')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Función de Cálculo')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tasas Sector')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionOnce(t){
  let tiempo=t
  //PLANES DE PAGO
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Planes de Pago')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Consultar Planes de Pago')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Comprobantes Planes de Pago')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Plan de Pago Especial')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Reimprimir Chequera')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}


SeccionDoce(t){
  let tiempo=t
  //AJUSTE CTA CTE
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Cta. Cte.')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Ajuste Masivo Cta. Cte.')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Ajuste Manual Cta. Cte.')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cancelación Masiva de Obligaciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}
 

SeccionTrece(t){
  let tiempo=t
  //EXENCIONES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Exenciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Vínculos Situación Especial')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionCatorce(t){
  let tiempo=t
  //CAJAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Cajas')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Apertura de Caja')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Registrar Cobranza')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cierre de Caja')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Anular Cupón')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Reimpresión Ticket')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}


  SeccionTreinta(t){
    let tiempo=t
      cy.wait(1000)
      cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
      cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web1_PO