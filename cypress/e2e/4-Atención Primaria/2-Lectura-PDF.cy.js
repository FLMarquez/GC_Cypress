const path = require('path'); // Asegúrate de tener esta línea al principio

describe('Test de extracción de texto de PDF', () => {
    it('Extrae texto de un archivo PDF y valida', () => {
        // Usa la ruta absoluta directamente
        const pdfFilePath = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\aadeudacontadosellados2_impl.pdf';

        cy.task('parsePdf', { filePath: pdfFilePath })
        .then((extractedText) => {
            // Normalizar el texto extraído
            const normalizedText = extractedText.replace(/\s+/g, ' ').trim();

            cy.log(normalizedText);

            // Obtener la fecha de hoy en formato dd/mm/yy
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = String(today.getFullYear()).slice(-2, '0');
            const formattedDate = `${day}/${month}/${year}`;

            // Validaciones con texto normalizado
            expect(normalizedText).to.include('Usuario: dsimoncini');
            expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('CARRION MICAELA DANIELA');
            expect(normalizedText).to.include('MUNICIPALIDAD DE GODOY CRUZ');
            expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('Comprobante');
            expect(normalizedText).to.include('COMERCIO');
            expect(normalizedText).to.include('TOTAL');
            expect(normalizedText).to.include('CIUDAD');
            expect(normalizedText).to.include('Rentas');
            expect(normalizedText).to.include('Credicoop');
            expect(normalizedText).to.include('CONTRIBUYENTE');
            expect(normalizedText).to.include('Entidades');
        });
    });
});
