import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class proyectoOcho_Full_Web_PO{

    visitHome() {
        let tiempo = 1000;
        beforeEach(() => {
          cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin');
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
       //PERSONAS
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Personas')])[1]").should("be.visible").click({ force: true });
        cy.xpath("//a[contains(.,'Administración de Personas')]").invoke('show').click({ force: true });         
        cy.xpath("//a[contains(.,'Gestión del Ciudadano')]").invoke('show').click({ force: true });           
        cy.xpath("//a[contains(.,'Unificación de CUIT')]").invoke('show').click({ force: true }); 
        cy.wait(tiempo);
        
        
      } 


      SeccionTres(t){
           let tiempo=t
        //OBJETOS
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Objetos')])[1]").invoke('show').click({ force: true });
        cy.xpath("(//a[contains(.,'Consultar Objetos')])[1]").invoke('show').click({ force: true }); 
        cy.xpath("//a[contains(.,'Actividades Comercio')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Reactivar Comercio')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Generar Fraccionamiento')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Generar Unificación')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Generar Multicuentas')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Consultar Operaciones Catastro')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Consultar Objetos por Domicilio')]").invoke('show').click({ force: true });
        cy.xpath("//a[contains(.,'Objetos con más de 30 Vínculos')]").invoke('show').click({ force: true });    
        cy.wait(tiempo)
      }


      SeccionCuatro(t){
        let tiempo=t
        //EMISIÓN DE DEUDA
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión de Deuda')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Atención Primaria')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Emisión Deuda Apremios Múltiples')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta de Comprobantes')]").invoke('show').click({ force: true });
      cy.wait(tiempo)


    }
           
      SeccionCinco(t){
         let tiempo=t
         //CUENTA CORRIENTE
      cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 5000 }).click();
      cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });
      cy.xpath("//a[contains(.,'Cuenta Corriente')]").invoke('show').click({ force: true });
      cy.xpath("//a[contains(.,'Consulta Cta. Cte.')]").invoke('show').click({ force: true });
      cy.wait(tiempo)

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
 
      // SeccionSeis(t){
      //   let tiempo=t
      //  cy.wait(1000)
      //   cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
      //   cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    //}
        
      
    }//final

export default proyectoOcho_Full_Web_PO