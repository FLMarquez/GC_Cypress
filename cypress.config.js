const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process'); // Importa execSync para ejecutar comandos del sistema

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
  downloadsFolder: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',
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
        convertHtmlToPdf({ input, output }) {
      return new Promise((resolve, reject) => {
        const cmd = `${pandoc} ${input} -o ${output}`;
        exec(cmd, (error, stdout, stderr) => {
          if (error) {
            return reject(error);
          }
          resolve();
        });
      });
    }
      });

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-extensions');
          launchOptions.args.push('--disable-software-rasterizer');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          
          //launchOptions.args.push('--headless'); // Asegúrate de estar en modo headless

          launchOptions.preferences.default.download = {
            prompt_for_download: false,
            'plugins.always_open_pdf_externally': true,
            default_directory: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads'
          };


          launchOptions.preferences = {
            'download.prompt_for_download': false,
            'plugins.always_open_pdf_externally': true,
            'plugins.plugins_disabled': ['Chrome PDF Viewer']
          };
        } else if (browser.name === 'firefox') {
          launchOptions.preferences = {
            'browser.download.folderList': 1, // Usa la carpeta de descargas por defecto
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

      return config;
    },
    baseUrl: 'https://test.elinpar.com',
    env: {
      downloadsFolder: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',
    }
  }
});

