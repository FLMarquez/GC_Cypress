const path = require('path'); // Asegúrate de tener esta línea al principio

describe('Test de extracción de texto de PDF', () => {
    it('Extrae texto de un archivo PDF y valida', () => {
        // Usa la ruta absoluta directamente
        //RUTA LOCAL
        const pdfFilePath = 'C:\\home\\workspace\\GODOYCRUZ\\aadeudacontadosellados2_impl.pdf';
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
            expect(normalizedText).to.include('Usuario: dsimoncini');
            //expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('MUNICIPALIDAD DE GODOY CRUZ');
            expect(normalizedText).to.include('Contribuyente:');
            expect(normalizedText).to.include('Destinatario:');
            //expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('Padrón');
            expect(normalizedText).to.include('Comprobante');
            expect(normalizedText).to.include('C. CATASTRAL');
            expect(normalizedText).to.include('SUP. TERRENO');
            expect(normalizedText).to.include('SUP. CUBIERTA');
            expect(normalizedText).to.include('ZONA');
            expect(normalizedText).to.include('CLASE');
            expect(normalizedText).to.include('MTS. FRENTE');
            expect(normalizedText).to.include('Padrón');
            expect(normalizedText).to.include('Domicilio Fiscal Persona:');
            expect(normalizedText).to.include('Comprobante');
            expect(normalizedText).to.include('CÓDIGO');
            expect(normalizedText).to.include('OBSERVACIONES');
            expect(normalizedText).to.include('PERIODO/CUOTA');
            expect(normalizedText).to.include('IMPORTE');
            expect(normalizedText).to.include('INTERESES');
            expect(normalizedText).to.include('TOTAL');
            expect(normalizedText).to.include('Son Pesos:');
            expect(normalizedText).to.include('TOTAL:');
            expect(normalizedText).to.include('VTO:');
            expect(normalizedText).to.include('Padrón');
            expect(normalizedText).to.include('DATOS DEL CONTRIBUYENTE/TITULAR');
            expect(normalizedText).to.include('Comprobante');
            expect(normalizedText).to.include('Son Pesos:');
            expect(normalizedText).to.include('TOTAL:');
            expect(normalizedText).to.include('Vencimiento:');
            expect(normalizedText).to.include('Entidades: Pago Fácil, Rapipago, Montemar y Cía Financiera, Instituto de Juego y Casinos (por medio de agencias oficiales de quiniela), Bolsa de Comercio de Mendoza.');
            expect(normalizedText).to.include('Sub-Delegación de Rentas en Juzgados de Tránsito: J.V. Gonzalez 750, esquina Cipolleti');
            expect(normalizedText).to.include('Centro de Atención Unificada: Perito Moreno 72, Paso de los Andes 1597, Sarmiento 585 (Paseo Staré) y Joaquín V. Gonzalez 750');
            expect(normalizedText).to.include('Bancos: Superville, Nación, Credicoop, Macro, HSBC y San Juan');
        });
    });
});
