describe('Pruebas de conversión de HTML a PDF', () => {
    it('Convierte el archivo HTML descargado a PDF', () => {
      const inputPath = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\downloads.htm';
      const outputPath = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\aadeudacontadosellados2_impl.pdf';
  
      // Verifica si el archivo HTML existe antes de intentar convertirlo
      cy.readFile(inputPath, { timeout: 10000 }).then((content) => {
        if (content) {
          // Llama a la tarea de conversión
          cy.task('convertHtmlToPdf', {
            input: inputPath,
            output: outputPath
          }).then(() => {
            cy.log('HTML convertido a PDF exitosamente.');
          });
        } else {
          cy.log('El archivo HTML está vacío o no se pudo leer correctamente.');
        }
      }).catch((err) => {
        cy.log('Error al leer el archivo HTML:', err.message);
        throw err; // Opcional, para marcar la prueba como fallida si ocurre un error
      });
    });
  });
  
  