import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web1_1_PO {

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
    
        cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
        cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
            cy.xpath("//span[contains(.,'Gestión del Ciudadano')]").should('be.visible', { timeout: 5000 }).contains('Gestión del Ciudadano');
            cy.wait(tiempo);
        });
    
        cy.xpath("//a[contains(.,'Unificación de CUIT')]").invoke('show').click({ force: true });
        cy.wait(tiempo);
        cy.get('iframe', { timeout: 10000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
        cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.wait(10000);
        cy.xpath("//span[contains(.,'Unificación de Domicilio por Cuit')]").should('be.visible', { timeout: 30000 }).contains('Unificación de Domicilio por Cuit');
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
        cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
            cy.xpath("//span[contains(.,'Consultar Objetos')]").should('be.visible', { timeout: 5000 }).contains('Consultar Objetos');
            cy.wait(tiempo);
        });
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Actividades Comercio')]").invoke('show').click({ force: true }); 
        cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Administración de Comercios y Actividades')]").should('be.visible', { timeout: 5000 }).contains('Administración de Comercios y Actividades')
        cy.wait(tiempo)
       
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Reactivar Comercio')]").invoke('show').click({ force: true });
        cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
        cy.xpath("//span[contains(.,'Reactivar Comercio')]").should('be.visible', { timeout: 5000 }).contains('Reactivar Comercio')
        cy.wait(tiempo)
        cy.wait(tiempo);
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Fraccionamiento')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Fraccionamiento')]").should('be.visible', { timeout: 5000 }).contains('Fraccionamiento')
      cy.wait(tiempo)
       
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Unificación')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Unificación')]").should('be.visible', { timeout: 5000 }).contains('Unificación')
      cy.wait(tiempo)

      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Multicuentas')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Multicuentas')]").should('be.visible', { timeout: 5000 }).contains('Multicuentas')
      cy.wait(tiempo)
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Operaciones Catastro')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consultar Operación Catastro')]").should('be.visible', { timeout: 5000 }).contains('Consultar Operación Catastro')
      cy.wait(tiempo)
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Objetos por Domicilio')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Búsqueda de Objetos por domicilio')]").should('be.visible', { timeout: 5000 }).contains('Búsqueda de Objetos por domicilio')
      cy.wait(tiempo)
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Objetos con más de 30 Vínculos')]").invoke('show').click({ force: true });    
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Personas - Vínculos Activos > 30')]").should('be.visible', { timeout: 5000 }).contains('Personas - Vínculos Activos > 30')
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
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Atención Primaria')]").should('be.visible', { timeout: 5000 }).contains('Atención Primaria')
      cy.wait(tiempo)
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión Deuda Apremios Múltiples')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Impresión Boletas Apremio')]").should('be.visible', { timeout: 5000 }).contains('Impresión Boletas Apremio')
      cy.wait(tiempo)
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Comprobantes')]").invoke('show').click({ force: true });
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta de Comprobantes')]").should('be.visible', { timeout: 5000 }).contains('Consulta de Comprobantes')
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
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Consulta Cuenta Corriente')]").should('be.visible', { timeout: 5000 }).contains('Consulta Cuenta Corriente')
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
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Obligaciones')]").should('be.visible', { timeout: 5000 }).contains('Generación de Obligaciones')
      cy.wait(tiempo)
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obligaciones')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Simular y Generar Obligaciones Correlativas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación de Obligaciones de Inmuebles Correlativas')]").should('be.visible', { timeout: 5000 }).contains('Generación de Obligaciones de Inmuebles Correlativas')
      cy.wait(tiempo)
    });

 }

 SeccionSiete(t){
  let tiempo=t
  //RECAUDACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(text(), 'Importar Archivo de Pago')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Importar Archivo Rendición')]").should('be.visible', { timeout: 5000 }).contains('Importar Archivo Rendición')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Rendiciones')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Administración de Rendiciones de Recaudación')]").should('be.visible', { timeout: 5000 }).contains('Administración de Rendiciones de Recaudación');
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Rendición Manual de Pagos')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Rendición Manual de Pagos')]").should('be.visible', { timeout: 5000 }).contains('Rendición Manual de Pagos')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Archivos SUGIT')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Generación Archivo SUGIT')]").should('be.visible', { timeout: 5000 }).contains('Generación Archivo SUGIT')
      cy.wait(tiempo)
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(text(),'Reporte Estacionamiento Medido')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Reporte Estacionamiento Medido')]").should('be.visible', { timeout: 5000 }).contains('Reporte Estacionamiento Medido')
      cy.wait(tiempo)
    });

}
  

SeccionOcho(t){
  let tiempo=t
  //INFORMES DE RECAUDACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación por Fecha')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Recaudación por Fecha de Imputación')]").should('be.visible', { timeout: 5000 }).contains('Recaudación por Fecha de Imputación')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación por Imputación Contable')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Recaudación por Imputación Contable')]").should('be.visible', { timeout: 5000 }).contains('Recaudación por Imputación Contable')
      cy.wait(tiempo)
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación de Tasas Varias')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
      cy.xpath("//span[contains(.,'Informe de recaudacion por tasa varia y cuenta contable')]").should('be.visible', { timeout: 5000 }).contains('Informe de recaudacion por tasa varia y cuenta contable')
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

export default proyectoOcho_Full_Web1_1_PO