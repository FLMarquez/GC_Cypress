import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web_PO {

  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin', {
        timeout: 120000, // Tiempo máximo de espera en milisegundos
        onBeforeLoad: (win) => {
          // Acciones antes de que se cargue la página
          console.log('La página está a punto de cargarse');
        },
        onLoad: (win) => {
          // Acciones para cuando la página se carga completamente
          console.log('La página se ha cargado completamente');
        },
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

SeccionQuince(t){
  let tiempo=t
  //INFORME CAJAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Cajas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Resumen Cobranzas')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resumen Cobranzas por Cajero')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionDieciseis(t){
  let tiempo=t
  //JUZGADO DE FALTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Juzgado de Faltas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Administración de Talonarios')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Nueva Acta de Infracción')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Recursos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Resoluciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Editar Resolución')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Antecedentes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Resolución Masiva')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resolución Masiva Pago Voluntario')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'ABM Juzgados')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Resolución Masiva')])[3]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Notificación de Recursos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Actas Sin Infractor')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Resoluciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Configuración de Infracciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Lote Cédula')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración Lote Notificación')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Cédulas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Recepción y Devolución de Cédula')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Infracciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Resolución de Accidentes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM unidad Fija')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Parametro por Juzgado')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}


SeccionDiecisiete(t){
  let tiempo=t
  //GESTIÓN DE DEUDA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión de Deuda')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Generar Lote')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[1]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Gestiones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Tags')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración de Notificaciones')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Gestión Telefónica')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(@href,'tipos,')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}


SeccionDieciocho(t){
  let tiempo=t
  //APREMIO
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Apremio')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Generar Lote')])[3]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Consultar Lote')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Administración Apremios')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generar Lote Precargado')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Sorteo de Apremio')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Cargar Etapa Masiva')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Importar Archivo Etapa')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Imprimir Apremio')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Recaudadores')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}


SeccionDiecinueve(t){
  let tiempo=t
  //MASIVA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Masiva')])[6]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'ABM Universos Masiva')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Comprobantes')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Muestras de Impresión')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Impresión Definitiva')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Archivos para Entes')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva de Ascensores')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Impresión de PDF de Masiva en Servidor')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación Boleto Digital Masiva')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Imágen Publicidad Boleto')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Objetos Excluidos Masiva')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Generación de Canastos y Alarmas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Monitor Masiva')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)

}

SeccionVeinte(t){
  let tiempo=t
  //TRIBUNAL DE CUENTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Tribunal de Cuentas')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Generar Informes de Tribunal de Cuentas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Importar Juicios Jurídica')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Excel Jurídica')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe de estado de gestión de cobranza')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)

}

SeccionVeintiuno(t){
  let tiempo=t
  //OBRAS PARTICULARES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Obras Particulares')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Generación de Obras Particulares')]").invoke('show').click({ force: true });
      cy.xpath("(//a[contains(.,'Generación Masiva de Ascensores')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Anular Obra Particular')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Permisos de Conexión')]").invoke('show').click({ force: true });   
      cy.wait(tiempo)

}


SeccionVeintidos(t){
  let tiempo=t
  //PAGOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Pagos')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Desaplicación de Pagos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Aplicación Manual Imp. Pendientes')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}


SeccionVeintitres(t){
  let tiempo=t
  //FISCALIZACIÓN
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Fiscalización')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Administración de Talonarios')])[2]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Acta Fiscalización')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Cargar Acta Fiscalización')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}

SeccionVeinticuatro(t){
  let tiempo=t
  //MOVIMIENTO DE FONDOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Movimiento de Fondos')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Generar Movimiento de Fondos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Informe Movimiento de Fondos')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}


SeccionVeinticinco(t){
  let tiempo=t
  //GENERADOR DE REPORTES
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Generador de Reportes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Reportes General')])[1]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Paramétricas Excel')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Reporte Mejoras Inmueble')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Padrones Comercio')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Reportes General')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Datos Adicionales Reportes')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}

SeccionVeintiseis(t){
  let tiempo=t
  //INFORME SELLOS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Informe Sellos')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Informe Sellos')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionVeintisiete(t){
  let tiempo=t
  //ENVÍO BOLETO MASIVA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[1]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("(//a[contains(.,'Envío Boleto Masiva')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)

}

SeccionVeintiocho(t){
  let tiempo=t
  //CONSULTAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Consultas')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Consulta GAM Data')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Roles')]").invoke('show').click({ force: true });  
      cy.xpath("(//a[contains(.,'Consulta Comercios')])[1]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Consulta Comercios Actividades')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Consulta Inmuebles')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'Consulta GAM Users')]").invoke('show').click({ force: true });  
      cy.wait(tiempo)

}

SeccionVeintinueve(t){
  let tiempo=t
  //PARAMÉTRICAS
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Personas')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Documento')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Estado Civil')]").invoke('show').click({ force: true });  
      cy.xpath("//a[contains(.,'ABM Naturaleza Jurídica')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Nacionalidad')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Vínculos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipo Adjuntos')]").invoke('show').click({ force: true });
      cy.wait(tiempo);
      cy.xpath("(//a[contains(.,'Paramétricas')])[2]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'Config. Domicilios')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Países')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Provincias')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Departamentos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Localidades/Distritos')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Calles')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Barrios')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'ABM Tipos Domicilio')]").invoke('show').click({ force: true });
      cy.wait(tiempo)
      cy.xpath("//a[contains(.,'ABM Circuitos Disribución')]").invoke('show').click({ force: true });
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

export default proyectoOcho_Full_Web_PO