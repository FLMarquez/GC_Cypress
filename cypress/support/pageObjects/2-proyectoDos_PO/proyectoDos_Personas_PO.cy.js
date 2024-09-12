import 'cypress-iframe'
class ProyectoDos_Po{

    visitHome() {
        let tiempo = 1000;
        beforeEach(() => {
          cy.visit('https://gcdigital.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin');
          cy.wait(tiempo);
        });
      }
    
      SeccionUno(usuario,contrasena,t){
        let tiempo=t
        //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS 
        //solo se intentará escribir en los campos #Usuario y #Contraseña si email y password no son cadenas vacías      
        if (usuario !== "") {
         cy.get('#vUSERNAME').should("be.visible").type(usuario);
         }
         if (contrasena !== "") {
         cy.get('#vUSERPASSWORD').should("be.visible").type(contrasena);
         }
         //HACER CLIC EN EL BOTÓN INICIAR SESIÓN
         cy.get('#LOGIN').should("be.visible").click() 
         cy.wait(tiempo)    
         

    }
    
      SeccionDos(cuit, t) {
        let tiempo = t;
        
        // Navegación por el menú
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Personas')])[1]").should("be.visible").click({ force: true });
        cy.xpath("//a[contains(.,'Administración de Personas')]").invoke('show').click({ force: true });          
        
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {  
      
       
          cy.get('.K2BT_TagsCollectionEmptyMessage').should('be.visible').contains('No hay filtros aplicados');
      
          
          cy.get('#INSERTP').should('be.visible');
          cy.get('#INSERTJ').should('be.visible');
      
         
          cy.get('span').should('be.visible').contains('CUIT');
          cy.get('span').should('be.visible').contains('Documento');
          cy.get('span').should('be.visible').contains('Apellido');
          cy.get('span').should('be.visible').contains('Nombre');
          cy.get('span').should('be.visible').contains('Fecha de Nacimiento');
          cy.get('span').should('be.visible').contains('Fecha de Fallecimiento');
          cy.get('span').should('be.visible').contains('Tipo Personeria');
          cy.get('span').should('be.visible').contains('Fecha de Inicio');
          cy.get('span').should('be.visible').contains('Fecha de Fin');                
          
          cy.get('#vK2BTOOLSGENERICSEARCHFIELD').should("be.visible").type(`${cuit}{enter}`);
          cy.get('#vVER_0001', { timeout: 10000 }).should('exist').click({ force: true });
          cy.wait(2500)
          cy.get('#Tab_TABS_TABSCONTROLContainerpanel1').should("be.visible").click({ force: true });
          cy.get('#GRIDTITLE_GRID').should("be.visible"),
          cy.get('#Tab_TABS_TABSCONTROLContainerpanel2').should("be.visible").click({ force: true });
          cy.get('#GRIDTITLE_GRID1').should("be.visible"),
          cy.get('#Tab_TABS_TABSCONTROLContainerpanel3').should("be.visible").click({ force: true });
          cy.get('#GRIDTITLE_GRID2').should("be.visible"),
          cy.get('#Tab_TABS_TABSCONTROLContainerpanel4').should("be.visible").click({ force: true });
          cy.get('#GRIDTITLE_GRID3').should("be.visible")

        });
               

      }

      SeccionTres(t) {
        let tiempo = t;
            
        cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
        
        
      }
    }//final

export default ProyectoDos_Po