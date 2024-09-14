const path = require('path');

describe('Test de extracción de texto de PDF', () => {
    it('Extrae texto de un archivo PDF y valida', () => {
        const pdfFilePath = path.join(Cypress.config('downloadsFolder'), 'aadeudacontadosellados2_impl.pdf');

        // Esperar un tiempo para que el archivo PDF se descargue completamente
        cy.wait(5000); // Ajusta el tiempo según sea necesario

        // Verificar si el archivo PDF existe antes de intentar analizarlo
        cy.readFile(pdfFilePath, { timeout: 10000 }) // Espera hasta 10 segundos para que el archivo exista
          .should('exist')
          .then(() => {
            // Ahora intenta analizar el archivo PDF
            cy.task('parsePdf', { filePath: pdfFilePath })
            .then((extractedText) => {
                const normalizedText = extractedText.replace(/\s+/g, ' ').trim();
                cy.log(normalizedText);

                // Obtener la fecha de hoy en formato dd/mm/yy
                const today = new Date();
                const day = String(today.getDate()).padStart(2, '0');
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const year = String(today.getFullYear()).slice(-2);
                const formattedDate = `${day}/${month}/${year}`;

                // Validaciones con texto normalizado
                expect(normalizedText).to.include('Usuario: dsimoncini');
                expect(normalizedText).to.include(`${formattedDate}`);
                expect(normalizedText).to.include('CARRION MICAELA DANIELA');
                expect(normalizedText).to.include('46860');
                expect(normalizedText).to.include(`${formattedDate}`);
                expect(normalizedText).to.include('COMERCIO');
                expect(normalizedText).to.include('Municipalidad de Godoy Cruz');
                expect(normalizedText).to.include('Comprobante');
                expect(normalizedText).to.include('Este comprobante se considerará pago, solo con');
                expect(normalizedText).to.include('el ticket de caja correspondiente.');
                expect(normalizedText).to.include('TOTAL');
                expect(normalizedText).to.include('INTERESES');
                expect(normalizedText).to.include('CÓDIGO');
            });
        });
    });
});
