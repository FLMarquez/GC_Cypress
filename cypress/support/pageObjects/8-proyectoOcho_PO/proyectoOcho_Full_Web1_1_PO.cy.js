import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web1_1_PO {

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
    
      SeccionDos(t) {
        let tiempo = t;
        // PERSONAS
       cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
        cy.xpath("(//a[contains(.,'Personas')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Administración de Personas')]", { timeout: 10000 }).invoke('show').click({ force: true });
    
        cy.get('iframe[name="EMBPAGEM"]', { timeout: 30000 })
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK', { timeout: 10000 })
        .should('be.visible')
        .contains('Administración de Personas');
            
        });
    
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
        cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
        cy.xpath("(//a[contains(.,'Personas')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Gestión del Ciudadano')]", { timeout: 10000 }).invoke('show').click({ force: true });
        
    
        cy.get('iframe', { timeout: 100000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
        cy.get('iframe').its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Gestión del Ciudadano');
            
        });
    
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
        cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
        cy.xpath("(//a[contains(.,'Personas')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Unificación de CUIT')]").invoke('show').click({ force: true });
        
        cy.get('iframe', { timeout: 10000 }).its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
        cy.get('iframe', { timeout: 30000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Unificación de Domicilio por Cuit');
        });
    }
     


      SeccionTres(t){
           let tiempo=t
        //OBJETOS
       cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
      cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("(//a[contains(.,'Consultar Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true }); 
        cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
      cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Consultar Objetos');
            
        });
       cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Actividades Comercio')]", { timeout: 10000 }).invoke('show').click({ force: true }); 
        cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Administración de Comercios y Actividades')
        
       
      });
     cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Reactivar Comercio')]", { timeout: 10000 }).invoke('show').click({ force: true });
        cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Reactivar Comercio')
       
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Fraccionamiento')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Fraccionamiento')
      cy.wait(tiempo)
       
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Unificación')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body', { timeout: 100000 }).should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Unificación')
      

      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generar Multicuentas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Multicuentas')
      
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Operaciones Catastro')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Consultar Operación Catastro')
      
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consultar Objetos por Domicilio')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Búsqueda de Objetos por domicilio')
      
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });          
      cy.xpath("(//a[contains(.,'Objetos')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Objetos con más de 30 Vínculos')]", { timeout: 10000 }).invoke('show').click({ force: true });    
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Personas - Vínculos Activos > 30')
      
      });

      }


      SeccionCuatro(t){
        let tiempo=t
        //EMISIÓN DE DEUDA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Atención Primaria')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Atención Primaria')
     
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión Deuda Apremios Múltiples')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible', { timeout: 5000 }).contains('Impresión Boletas Apremio')
      
      });
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Comprobantes')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Consulta de Comprobantes')
      cy.wait(tiempo)
      });


    }
           
      SeccionCinco(t){
         let tiempo=t
         //CUENTA CORRIENTE
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Cuenta Corriente')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Cta. Cte.')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Consulta Cuenta Corriente')
      
      });

    }

    SeccionSeis(t){
      let tiempo=t
      //OBLIGACIONES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obligaciones')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Simular y Generar Obligaciones')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Generación de Obligaciones')
      
      });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obligaciones')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Simular y Generar Obligaciones Correlativas')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Generación de Obligaciones de Inmuebles Correlativas')
      
    });

 }

 SeccionSiete(t){
  let tiempo=t
  //RECAUDACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(text(), 'Importar Archivo de Pago')]", { timeout: 10000 }).invoke('show').click({ force: true });
   
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Importar Archivo Rendición')
      
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Rendiciones')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#PGMDESCRIPTORTEXTBLOCK',{ timeout: 30000 }).should('be.visible').contains('Administración de Rendiciones de Recaudación');
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Rendición Manual de Pagos')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Rendición Manual de Pagos')
      
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Archivos SUGIT')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Generación Archivo SUGIT')
      
    });

      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Recaudación')])[1]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(text(),'Reporte Estacionamiento Medido')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Reporte Estacionamiento Medido')
      
    });

}
  

SeccionOcho(t){
  let tiempo=t
  //INFORMES DE RECAUDACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación por Fecha')]", { timeout: 10000 }).invoke('show').click({ force: true });
     
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Recaudación por Fecha de Imputación')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación por Imputación Contable')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Recaudación por Imputación Contable')
      
    });


      cy.get('[name="BTNTOGGLEMENU_MPAGE"]', { timeout: 10000 }).should("be.visible").click();
cy.get('span.sidebar-nav-item', { timeout: 10000 }).should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informes Recaudación')]", { timeout: 10000 }).invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de Recaudación de Tasas Varias')]", { timeout: 10000 }).invoke('show').click({ force: true });
      
      cy.get('iframe').its('length').should('eq', 1); // Espera hasta 20 segundos si es necesario
      cy.get('iframe', { timeout: 10000 }).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
        cy.get('#TITLE',{ timeout: 30000 }).should('be.visible').contains('Informe de recaudacion por tasa varia y cuenta contable')
      
    });

}

  SeccionTreinta(t){
    let tiempo=t
      
    cy.get('#USERNAMEINITIALS_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})
    cy.get('#SIGNOUT_MPAGE', { timeout: 10000 }).should('be.visible').click({force: true})

    }
        
      
    }//final

export default proyectoOcho_Full_Web1_1_PO