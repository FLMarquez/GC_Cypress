const path = require('path'); // Asegúrate de tener esta línea al principio

describe('Test de extracción de texto de PDF', () => {
    it('Extrae texto de un archivo PDF y valida', () => {
        // Usa la ruta absoluta directamente
        //RUTA LOCAL
        const pdfFilePath = 'C:\\home\\workspace\\GODOYCRUZ\\arptplanchetacomercio_impl.pdf';
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
            expect(normalizedText).to.include('DEPARTAMENTO FISCALIZACIÓN EXTERNA');
            //expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('dsimoncini');
            expect(normalizedText).to.include('Nro Partida:');
            expect(normalizedText).to.include('Fecha de Alta: ');
            expect(normalizedText).to.include('Valor Base:');
            expect(normalizedText).to.include('Exp de Habilitacion:');
            expect(normalizedText).to.include('Padrón Asociado:');
            expect(normalizedText).to.include('CUIT:');
            expect(normalizedText).to.include('Fecha de Cierre:');
            expect(normalizedText).to.include('Exp de Cierre:');
            expect(normalizedText).to.include('Datos del Comercio:');
            expect(normalizedText).to.include('Nombre de Fantasía:');
            expect(normalizedText).to.include('Titular:');
            expect(normalizedText).to.include('Domicilio:');
            expect(normalizedText).to.include('Referencia:');
            expect(normalizedText).to.include('Datos del Destinatario:');
            expect(normalizedText).to.include('Nombre:');
            expect(normalizedText).to.include('Domicilio:');
            expect(normalizedText).to.include('Observaciones:');
            expect(normalizedText).to.include('Circuito de distribución:');
            expect(normalizedText).to.include('Actividades:');
        });
    });
});


