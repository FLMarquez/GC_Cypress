describe('Pruebas de conversión de HTML a PDF', () => {
    it('Descarga y convierte el archivo HTML a PDF', () => {
      cy.visit('https://test.elinpar.com/descargar-archivo'); // Cambia esto a la URL que inicia la descarga
  
      // Espera a que el archivo HTML se descargue
      cy.wait(5000); // Ajusta el tiempo de espera según sea necesario
  
      const htmlPath = 'C:/ProgramData/Jenkins/.jenkins/workspace/GC_Cypress_Pipeline/cypress/downloads/downloads.htm';
      const pdfPath = 'C:/ProgramData/Jenkins/.jenkins/workspace/GC_Cypress_Pipeline/cypress/downloads/aadeudacontadosellados2_impl.pdf';
  
      // Convierte el archivo HTML a PDF usando la tarea de Cypress
      cy.task('convertHtmlToPdf', { input: htmlPath, output: pdfPath }).then((error) => {
        if (error) {
          throw new Error('Error al convertir HTML a PDF: ' + error);
        }
  
        // Verifica que el PDF se haya creado correctamente
        cy.readFile(pdfPath).should('exist');
      });
    });
  });
  