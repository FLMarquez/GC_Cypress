class ProyectoUno_Loguin_Po{

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

    SeccionDos(t){
        let tiempo=t
       
        cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

    }

   
    
}//final

export default ProyectoUno_Loguin_Po