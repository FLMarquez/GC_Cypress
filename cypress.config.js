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
  defaultCommandTimeout: 800000,
  pageLoadTimeout: 800000 ,
  videoCompression: false,
  videoUploadOnPasses: true,
  trashAssetsBeforeRuns: false,
  projectId: "e7vrap",
  downloadsFolder: 'C:\\home\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',

  e2e: {
    setupNodeEvents(on, config) {
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
          launchOptions.args.push('--headless'); // Asegúrate de estar en modo headless

          // Configurar la carpeta de descargas en Chrome
          launchOptions.preferences.default = {
            'download': {
                'default_directory': 'C:\\home\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',
                'prompt_for_download': false,
                'directory_upgrade': true,
                'extensions_to_open': 'applications/pdf'
            },
            'plugins.plugins_disabled': ['Chrome PDF Viewer'],
            'plugins.always_open_pdf_externally': true
        };
        

        } else if (browser.name === 'firefox') {
          launchOptions.preferences = {
            'browser.download.dir': 'C:\\home\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',
            'browser.download.folderList': 2,
            'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
            'pdfjs.disabled': true
        };
        
        }

        return launchOptions;
      });

      return config;
    },
    baseUrl: 'https://test.elinpar.com',
    env: {
      downloadsFolder: 'C:\\home\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',

    }
  }
});


