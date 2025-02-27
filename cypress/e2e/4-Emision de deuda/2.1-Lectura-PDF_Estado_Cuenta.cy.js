const path = require('path'); // Asegúrate de tener esta línea al principio

describe('Test de extracción de texto de PDF', () => {
    it('Extrae texto de un archivo PDF y valida', () => {
        // Usa la ruta absoluta directamente
        //RUTA LOCAL
        const pdfFilePath = 'C:\\home\\workspace\\GODOYCRUZ\\arptdeudacontribuyenteap_impl.pdf';
        //RUTA SERVER - ELINPAR
        //const pdfFilePath = 'C:\\home\\workspace\\GODOYCRUZ\\aadeudacontadosellados2_impl.pdf';
       
        cy.task('parsePdf', { filePath: pdfFilePath })
        .then((extractedText) => {
            // Normalizar el texto extraído
            const normalizedText = extractedText.replace(/\s+/g, ' ').trim();

            cy.log(normalizedText);

              // Obtener la fecha de hoy en formato dd/mm/yy
              const today = new Date();
              const day = String(today.getDate()).padStart(2, '0');
              const month = String(today.getMonth() + 1).padStart(2, '0');
              const year = String(today.getFullYear()).slice(-2);
              const formattedDate = `${day}/${month}/${year}`;
  
              // Crear una expresión regular para validar la fecha en el texto
              const dateRegex = new RegExp(`${formattedDate} \\d{2}:\\d{2}`); // dd/mm/yy hh:mm
            

            // Validaciones con texto normalizado
            expect(normalizedText).to.include('Generado por:');
            expect(normalizedText).to.include('dsimoncini');
            expect(normalizedText).to.include('Fecha de Generación:');
            //expect(normalizedText).to.include('26/02/25');
            expect(normalizedText).to.include('Deuda actualizada al:');
            //expect(normalizedText).to.include('26/02/25');
            expect(normalizedText).to.include('Estado de Cuenta');
            expect(normalizedText).to.include('PADRÓN');
            expect(normalizedText).to.include('50350');
            expect(normalizedText).to.include('Datos del Responsable');
            expect(normalizedText).to.include('Identificación Tributaria:');
            expect(normalizedText).to.include('27223096498');
            expect(normalizedText).to.include('Razón Social:');
            expect(normalizedText).to.include('Domicilio:');
            //expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('Periodo');
            expect(normalizedText).to.include('Estado');
            expect(normalizedText).to.include('Vencimiento');
            expect(normalizedText).to.include('Capital');
            expect(normalizedText).to.include('Interes');
            expect(normalizedText).to.include('Total');
            expect(normalizedText).to.include('Subtotales:');
            expect(normalizedText).to.include('Totales:');
            expect(normalizedText).to.include('Información de Apremios');
            expect(normalizedText).to.include('Rec.');
            expect(normalizedText).to.include('N° Boleta Apremio');
            expect(normalizedText).to.include('Etapa Actual');
            expect(normalizedText).to.include('Gastos');
            expect(normalizedText).to.include('Honorarios');
            expect(normalizedText).to.include('Total');
            expect(normalizedText).to.include('Totales Gastos Apremios:');
            expect(normalizedText).to.include('DEUDA TOTAL:');
            //expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('Página');
        });
    });
});
