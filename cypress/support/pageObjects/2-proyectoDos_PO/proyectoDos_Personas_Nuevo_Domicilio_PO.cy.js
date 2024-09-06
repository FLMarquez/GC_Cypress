import 'cypress-iframe';

class ProyectoDos_Personas_Nuevo_Domicilio_Po {

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
            cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible", { timeout: 10000 }).type(usuario);
        }
        if (contrasena !== "") {
            cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible", { timeout: 10000 }).type(contrasena);
        }
        cy.wait(tiempo);
        cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible", { timeout: 10000 }).click();
        cy.wait(tiempo);
    }

    SeccionDos(cuit, tipoDomicilio, pais, provincia, departamento, t) {
        let tiempo = t;

        // Navegación por el menú
        cy.get('[name="BTNTOGGLEMENU_MPAGE"]').should("be.visible", { timeout: 10000 }).click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible", { timeout: 10000 }).contains('Tributario Faro').click({ force: true });
        cy.xpath("(//a[contains(.,'Personas')])[1]").should("be.visible", { timeout: 10000 }).click({ force: true });
        cy.xpath("//a[contains(.,'Administración de Personas')]").invoke('show').click({ force: true });

        // Búsqueda de una persona
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            // Escribir el CUIT y presionar Enter en el campo de búsqueda
            cy.get('#vK2BTOOLSGENERICSEARCHFIELD').should("be.visible", { timeout: 10000 }).type(`${cuit}{enter}`);

            // Esperar y hacer clic en el botón de verificación (vVER_0001)
            cy.get('#vVER_0001').should('exist', { timeout: 10000 }).click({ force: true });

            // Clic en la primera pestaña (Tab_TABS_TABSCONTROLContainerpanel1)
            cy.get('#Tab_TABS_TABSCONTROLContainerpanel1').should("be.visible", { timeout: 10000 }).click({ force: true });

            // Verificar que la tabla con ID GRIDTITLE_GRID sea visible
            cy.get('#GRIDTITLE_GRID').should("be.visible", { timeout: 10000 });

            // Esperar un segundo y luego hacer clic en el botón de inserción
            cy.wait(1000);
            cy.get('#INSERT').should("be.visible", { timeout: 10000 }).click({ force: true });

            // Esperar adicional de 2.5 segundos para asegurar la estabilidad de la interacción
            cy.wait(2500);
            cy.iframe().find('#DTSID').select(tipoDomicilio, { force: true })
            cy.iframe().find('#PASID').select(pais, { force: true })
            cy.iframe().find('#PVIID').select(provincia, { force: true })
            cy.iframe().find('#DPTID').select(departamento, { force: true })
            cy.iframe().find('#vSEARCHLOCALIDADES').should('be.visible').click({ force: true })
        });

    }

    SeccionTres(localidad, t) {
        let tiempo = t;
    
        // Seleccionar el iframe padre 'EMBPAGEM' primero
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            // Seleccionar el iframe hijo 'gxp1_ifrm'
            cy.get('iframe[id="gxp1_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
                cy.xpath("//input[contains(@id,'vCLCLDESCRIPCION')]").should('be.visible', { timeout: 10000 }).type(localidad, { force: true });
                cy.wait(tiempo);
                cy.xpath("//img[@id='vSELECCIONAR_ACTION_0001']").should('be.visible', { timeout: 10000 }).click({ force: true });
            });
        });
    }
    
    SeccionCuatro(cp, t) {
        let tiempo = t;

        // Seleccionar el iframe padre 'EMBPAGEM' primero
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            // Asegúrate de que solo haya un iframe con el que trabajas
            cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
            cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
                cy.get('#DMCCP').should('be.visible', { timeout: 10000 }).clear().type(cp, { force: true });
                cy.wait(tiempo);
                cy.get('#vSEARCHCALLES').should('be.visible', { timeout: 10000 }).click({ force: true });
            });
        });
    }

    SeccionCinco(calle, t) {
        let tiempo = t;

        // Seleccionar el iframe padre 'EMBPAGEM' primero
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            // Seleccionar el iframe hijo 'gxp1_ifrm'
            cy.get('iframe[id="gxp1_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
                cy.get('#vGENERICFILTER_GRID').should('be.visible', { timeout: 10000 }).type(calle, { force: true });
                cy.wait(tiempo);
                cy.get('#vSELECCIONAR_ACTION_0001').should('be.visible', { timeout: 10000 }).click({ force: true });
            });
        });
    }

    SeccionSeis(numerocalle, barrio, t) {
        let tiempo = t;

        // Seleccionar el iframe padre 'EMBPAGEM' primero
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            // Asegúrate de que solo haya un iframe con el que trabajas
            cy.get('iframe').its('length').should('eq', 1); // Asegúrate de que solo haya un iframe
            cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
                cy.get('#DMCNRO').should('be.visible', { timeout: 10000 }).clear().type(numerocalle, { force: true });
                cy.wait(tiempo);
                cy.get('#BARRIOID').should('be.visible', { timeout: 10000 }).select(barrio, { force: true });
                cy.wait(tiempo);
                cy.get('#CONFIRMARCARGA').should('be.visible', { timeout: 10000 }).click({ force: true });
            });
        });
    }

    SeccionSiete(t) {
        let tiempo = t;
        cy.get('iframe[name="EMBPAGEM"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            // Seleccionar el iframe hijo 'gxp1_ifrm'
            cy.get('iframe[id="gxp1_ifrm"]').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
                cy.get('#TEXTBLOCK').should('be.visible', { timeout: 10000 }).and('contain.text', 'El Domicilio fue Agregado con Exito');
                cy.get('#BUTTON1').should('be.visible', { timeout: 10000 }).click({ force: true });
                cy.wait(tiempo);
            }); 
        });
    }

    SeccionOcho(t) {
        let tiempo = t;
        
        cy.get('#USERNAMEINITIALS_MPAGE').should('be.visible', { timeout: 10000 }).click({ force: true });
        cy.wait(tiempo);
        cy.get('#MPW0006LOGOUT').should('be.visible', { timeout: 10000 }).click({ force: true });
        cy.wait(tiempo);
        cy.get('input[name="LOGIN"]').should('be.visible', { timeout: 10000 });
    }
}
export default ProyectoDos_Personas_Nuevo_Domicilio_Po;
