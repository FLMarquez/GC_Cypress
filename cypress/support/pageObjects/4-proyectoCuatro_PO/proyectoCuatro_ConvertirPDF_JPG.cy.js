import 'cypress-iframe';
import 'cypress-file-upload';
import 'cypress-wait-until';
require('cypress-downloadfile/lib/downloadFileCommand');
const path = require('path');

const downloadFolder = 'C:/home/workspace/GODOYCRUZ';

class ProyectoCuatro_ConvertirPDF_JPG_Po {
  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.visit('https://www.ilovepdf.com/es', {
        timeout: 800000,
        onBeforeLoad: (win) => {
          win.fetch = null;
        },
      });
      cy.wait(tiempo);
    });
  }

  SeccionUno(t) {
    let tiempo = t;
    const jpgFilePath = `${downloadFolder}/aadeudacontadosellados2_impl_page-0001.jpg`;

    // **Eliminar archivos previos antes de iniciar la prueba**
    cy.task('deleteFile', jpgFilePath).then(() => {
      cy.log('Archivo JPG eliminado antes de la prueba.');
    });

    cy.xpath('//a[contains(@title,"PDF a JPG")]')
      .should('exist')
      .and('be.visible')
      .invoke('show')
      .click({ force: true });

    cy.wait(tiempo);

    cy.xpath('(//a[@href="javascript:;"])[1]')
      .should('exist')
      .and('be.visible')
      .invoke('show')
      .click({ force: true });

    cy.wait(tiempo);

    // **Subir el archivo PDF**
    const pdfFilePath = `${downloadFolder}/aadeudacontadosellados2_impl.pdf`;
    cy.get('input[type="file"]').should('exist').invoke('show');
    cy.get('input[type="file"]').selectFile(pdfFilePath, { force: true });

    // **Iniciar la conversión**
    cy.get('#processTask').should('be.visible').click({ force: true });
    cy.wait(tiempo);

    // **Descargar el archivo convertido**
    cy.get('#pickfiles').should('be.visible').click({ force: true });

    // **Esperar hasta que el archivo .JPG esté disponible**
    cy.waitUntil(() => cy.task('fileExists', jpgFilePath), {
      timeout: 30000, // Espera hasta 30s
      interval: 2000, // Verifica cada 2s
    }).then(() => {
      cy.log('Archivo JPG descargado exitosamente.');

      // **Verificar la existencia del archivo .JPG**
      cy.task('fileExists', jpgFilePath).should('be.true');
    });
  }
}

export default ProyectoCuatro_ConvertirPDF_JPG_Po;




