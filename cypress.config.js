const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1500,
  viewportHeight: 864,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 19000,
  videoCompression: false,
  trashAssetsBeforeRuns: false,
  projectId: "e7vrap",
  e2e: {
    setupNodeEvents(on, config) {
      // Configurar el directorio de descarga de manera dinámica
      const downloadsFolder = path.join(config.downloadsFolder || 'cypress', 'downloads');

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.preferences.default.download = {
            prompt_for_download: false,
            'plugins.always_open_pdf_externally': true,
            default_directory: downloadsFolder
          };
          launchOptions.preferences = {
            'download.prompt_for_download': false,
            'plugins.always_open_pdf_externally': true,
            'plugins.plugins_disabled': ['Chrome PDF Viewer']
          };
        } else if (browser.name === 'firefox') {
          launchOptions.preferences = {
            'browser.download.folderList': 2, // Usa la carpeta especificada en `default_directory`
            'browser.download.dir': downloadsFolder,
            'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
            'pdfjs.disabled': true
          };
        } else if (browser.name === 'electron') {
          launchOptions.preferences = {
            'download.prompt_for_download': false,
          };
        }

        return launchOptions;
      });

      on('task', {
        downloadFile,
        parsePdf({ filePath }) {
          const dataBuffer = fs.readFileSync(filePath);
          return pdfParse(dataBuffer).then(data => {
            return data.text;
          });
        },
      });

      return config;
    },
    downloadsFolder: process.env.WORKSPACE 
      ? path.join(process.env.WORKSPACE, 'cypress', 'downloads') 
      : 'cypress/downloads', // Ruta por defecto si no está en Jenkins
  },
});



