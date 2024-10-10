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
  //experimentalRunAllSpecs: true,
  defaultCommandTimeout: 1200000,  
  pageLoadTimeout: 1200000, 
  videoCompression: false,
  trashAssetsBeforeRuns: false,
  projectId: "e7vrap",
  downloadsFolder: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GODOYCRUZ',
  e2e: {
    setupNodeEvents(on, config) {
      const downloadsPath = config.env.downloadsFolder || 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GODOYCRUZ';
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
          // Opciones de Chrome
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-extensions');
          launchOptions.args.push('--disable-software-rasterizer');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-popup-blocking');
          launchOptions.args.push('--start-maximized');
          launchOptions.args.push('--disable-infobars');
          launchOptions.args.push('--disable-features=VizDisplayCompositor');

          // Configuración de descargas
          launchOptions.preferences = {
            'download.default_directory': downloadsPath, // Ruta de descarga
            'download.prompt_for_download': false, // No preguntar al descargar
            'plugins.always_open_pdf_externally': true, // Abrir PDFs externamente
            'profile.default_content_setting_values.automatic_downloads': 1, // Permitir descargas automáticas
            'profile.default_content_setting_values.mixed_script': 1, // Permitir scripts mixtos
            'profile.default_content_settings.popups': 0, // Sin popups
            'plugins.plugins_disabled': ['Chrome PDF Viewer'], // Desactivar visor de PDF
            'pdfjs.disabled': true, // Desactivar el visor de PDF por defecto
          };

          if (config.isHeadless) {
            launchOptions.args.push('--headless'); // Modo headless
          }

        } else if (browser.name === 'firefox') {
          // Opciones de Firefox
          launchOptions.preferences = {
            'browser.download.dir': downloadsPath,
            'browser.download.folderList': 2,
            'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
            'pdfjs.disabled': true // Desactivar el visor de PDF por defecto
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
      downloadsFolder: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GODOYCRUZ',
    }
  }
});




