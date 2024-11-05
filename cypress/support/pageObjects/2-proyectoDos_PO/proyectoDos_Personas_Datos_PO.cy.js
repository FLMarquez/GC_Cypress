import 'cypress-iframe'
class ProyectoDos_Personas_Datos_Po{

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
           

    }
    
      SeccionDos(cuit, Telefono, email, t) {
        let tiempo = t;
        
       
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Tributario Faro').click({ force: true });          
        cy.xpath("(//a[contains(.,'Personas')])[1]").should("be.visible").click({ force: true });
        cy.xpath("//a[contains(.,'Administración de Personas')]").invoke('show').click({ force: true });
        
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => { 
        cy.get('#vK2BTOOLSGENERICSEARCHFIELD').should("be.visible").type(`${cuit}{enter}`);
        cy.wait(6500)
        cy.get('#vUPDATE_0001', { timeout: 10000 }).should('exist').click({ force: true }); 

        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
          cy.wrap($iframe)
          .xpath("//a[@href='#'][contains(.,'Ver más')]").should('be.visible').click({ force: true })
          
                  
          cy.wrap($iframe)
          .xpath("//input[contains(@id,'PSNCARACTER01')]").should('be.visible').clear()
          .xpath("//input[contains(@id,'PSNCARACTER01')]").should('be.visible').type(Telefono);
               
          cy.wrap($iframe)
          .xpath("//input[contains(@id,'PSNCARACTER03')]").should('be.visible').clear()
          .xpath("//input[contains(@id,'PSNCARACTER03')]").should('be.visible').type(email);
            
          cy.wrap($iframe)
          .xpath("//input[contains(@id,'ENTER')]").should('be.visible').click({ force: true });
  

          cy.wait(5000)
          cy.wrap($iframe)
          cy.get('div.toast-message').should('be.visible', { timeout: 8000 }).contains('La personas fisicas SLAMOVITS fue actualizada', { timeout: 20000 });



        });


       
      });      
                   
        
                
    }

    SeccionTres(t) {
      let tiempo = t;
          
      cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
      cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
      
      
    }
        
    }//final

export default ProyectoDos_Personas_Datos_Po