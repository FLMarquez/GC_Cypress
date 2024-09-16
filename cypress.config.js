const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');

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
      });

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-gpu');
            launchOptions.args.push('--disable-extensions');
            launchOptions.args.push('--disable-software-rasterizer');
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--no-sandbox');
            launchOptions.args.push('--headless');
            
            launchOptions.preferences = {
                'download': {
                    'prompt_for_download': false,
                    'default_directory': 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads'
                },
                'plugins.always_open_pdf_externally': true
            };
        } else if (browser.name === 'firefox') {
            launchOptions.preferences = {
                'browser.download.dir': 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads',
                'browser.download.folderList': 2,
                'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
                'pdfjs.disabled': true
            };
        }
        return launchOptions;
    });   

     
    },
    
  }
});


