describe('Pruebas de conversión de HTML a PDF', () => {
    it('Convierte el archivo HTML descargado a PDF', () => {
      // Verifica si el archivo HTML existe antes de intentar convertirlo
      cy.readFile('C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\downloads.htm')
        .then(() => {
          // Llama a la tarea de conversión
          cy.task('convertHtmlToPdf', {
            input: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\downloads.htm',
            output: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\aadeudacontadosellados2_impl.pdf'
          }).then(() => {
            cy.log('HTML convertido a PDF exitosamente.');
          });
        })
        .catch((err) => {
          // Muestra un mensaje si el archivo HTML no se encuentra
          cy.log('Error al leer el archivo HTML:', err.message);
        });
    });
  });
  
  