// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-image-snapshot/command';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();

Cypress.Commands.add('Login_SMA', (usuario, contrasena, tiempo) => {
  cy.visit('https://gcdigitalhomo.godoycruz.gob.ar/K2BGAM/servlet/com.k2bgam.k2blogin');
  if (usuario) cy.get('#vUSERNAME', { timeout: 5000 }).should('be.visible').type(usuario);
  if (contrasena) cy.get('#vUSERPASSWORD', { timeout: 5000 }).should('be.visible').type(contrasena);
  cy.get('#LOGIN', { timeout: 5000 }).should('be.visible').click();
  cy.wait(tiempo);
});

Cypress.Commands.add('Validar_Campo', (selector, mensaje, nombreCampo) => {
  cy.xpath(selector).should('be.visible').and('contain', mensaje).then(() => {
    cy.log(`*************************`);
    cy.log(`El/La ${nombreCampo} es incorrecto/a.`);
    cy.log(`*************************`);
  });
});

Cypress.Commands.add('readPDF', (filePath) => {
  return cy.task('parsePdf', { filePath });
});

require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

const extract = require('extract-zip');
Cypress.Commands.add('extractZip', (zipPath, extractedPath) => {
  return new Cypress.Promise((resolve, reject) => {
    extract(zipPath, { dir: extractedPath })
      .then(resolve)
      .catch(reject);
  });
});