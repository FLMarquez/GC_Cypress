describe('Convertir PDF a JPG', () => {
    it('Convierte un PDF ya descargado en imagen', () => {
        const pdfPath = 'C:/home/workspace/GODOYCRUZ/arptplanchetacomercio_impl.pdf';
        const outputDir = 'C:/home/workspace/GODOYCRUZ';

        // Ejecuta la conversión
        cy.task('convertPdfToJpg', { pdfPath, outputDir }).then((result) => {
            expect(result).to.be.true;
        });

        // Verifica que la imagen fue creada
        cy.readFile('C:/home/workspace/GODOYCRUZ/arptplanchetacomercio_impl-1.jpg', { timeout: 10000 })
            .should('exist');
    });
});
