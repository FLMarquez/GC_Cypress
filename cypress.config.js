const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'mocha-allure-reporter',
  reporterOptions: {
    allureResultsPath: 'allure-results',
  },
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1500,
  viewportHeight: 864,
  chromeWebSecurity: false,
  defaultCommandTimeout: 1200000,  
  pageLoadTimeout: 1200000, 
  videoCompression: false,
  disableCypressDashboard: true,
 //videoUploadOnPasses: true,
  trashAssetsBeforeRuns: false,
  projectId: "e7vrap",
  //RUTA LOCAL
  //downloadsFolder: 'C:\\home\\workspace\\GODOYCRUZ',
  //RUTA SERVER - ELINPAR
  downloadsFolder: 'C:\\home\\workspace\\GODOYCRUZ',
  e2e: {
    setupNodeEvents(on, config) {
      //RUTA LOCAL
      //const downloadsPath = config.env.downloadsFolder || 'C:\\home\\workspace\\GODOYCRUZ';
      //RUTA SERVER - ELINPAR
      const downloadsPath = config.env.downloadsFolder || 'C:\\home\\workspace\\GODOYCRUZ';
      allureWriter(on, config);

      // Registrar las tareas
      on('task', {
        downloadFile,
        parsePdf({ filePath }) {
          const dataBuffer = fs.readFileSync(filePath);
          return pdfParse(dataBuffer).then(data => {
            return data.text;
          });
        },
      });

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-extensions');
          launchOptions.args.push('--disable-software-rasterizer');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-pdf-viewer');  // Desactiva completamente el visor de PDF

          if (config.isHeadless) {
            launchOptions.args.push('--headless'); // Asegúrate de estar en modo headless
          }

          // Configurar la carpeta de descargas en Chrome
          launchOptions.preferences.default = {
            'download': {
              'default_directory': downloadsPath,
              'prompt_for_download': false,
              'directory_upgrade': true,
              'extensions_to_open': ''
            },
            'plugins.plugins_disabled': ['Chrome PDF Viewer'], // Desactiva el visor de PDF
            'plugins.always_open_pdf_externally': true,
            'savefile.default_directory': downloadsPath, 
            'download.extensions_to_open': 'false', // No abrir archivos automáticamente
            'pdfjs.disabled': true, // Desactiva el visor de PDF por defecto
            'profile.default_content_settings.popups': 0
          };

        } else if (browser.name === 'firefox') {
          launchOptions.preferences = {
            'browser.download.dir': downloadsPath,
            'browser.download.folderList': 2, 
            'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
            'pdfjs.disabled': true
          };
        } else if (browser.name === 'electron') {
          launchOptions.preferences = {
            'download.prompt_for_download': false,
            'download.default_directory': downloadsPath
          };
        }

        return launchOptions;
      });

      return config;
    },
    baseUrl: 'https://test.elinpar.com',
    env: {
      //RUTA LOCAL
      //downloadsFolder: 'C:\\home\\workspace\\GODOYCRUZ',
      //RUTA SERVER - ELINPAR
      downloadsFolder: 'C:\\home\\workspace\\GODOYCRUZ',
    }
  }
});