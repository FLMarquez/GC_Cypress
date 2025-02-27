import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();

describe('Comparación de Imágenes Descargadas', () => {
  const downloadPath = 'C:/home/workspace/GODOYCRUZ';
  const originalPath = 'C:/home/workspace/GODOYCRUZ/Formato_Original';

  it('Verifica que las imágenes sean idénticas', () => {
    cy.viewport(1824, 1019);

    const downloadedImages = [
      { downloaded: 'arptdeudacontribuyenteap_impl-1.jpg', original: 'Imagen_Original3_Estado_Cuenta.jpg' },
    ];

    downloadedImages.forEach(({ downloaded, original }) => {
      const downloadedImagePath = `${downloadPath}/${downloaded}`;
      const originalImagePath = `${originalPath}/${original}`;

      cy.readFile(downloadedImagePath, 'base64').then((downloadedImage) => {
        cy.readFile(originalImagePath, 'base64').then((originalImage) => {
          if (!downloadedImage || !originalImage) {
            throw new Error('Una de las imágenes está vacía o no se pudo leer.');
          }

          cy.document().then((doc) => {
            const img = new Image();
            img.src = `data:image/jpeg;base64,${downloadedImage}`;
            doc.body.appendChild(img);

            cy.wrap(img).should('have.prop', 'complete', true);

            // Configuración más sensible para detectar la ausencia del logo
            cy.wrap(img).matchImageSnapshot(original, {
              capture: 'fullPage',
              padding: 1, // Menor padding para evitar que el margen influya
              failureThreshold: 0.00000001, // Umbral más bajo para detectar cualquier diferencia
              failureThresholdType: 'percent', // Tipo en porcentaje
              customDiffConfig: { threshold: 0.1 }, // Más sensibilidad en la comparación
            });
          });
        });
      });
    });
  });
});
