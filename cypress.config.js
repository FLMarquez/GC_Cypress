const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const extract = require('extract-zip');
const unzipper = require('unzipper');
const path = require('path'); // Se agrega para manejar rutas absolutas
const { convertPdfToJpg } = require('./cypress/support/pdfToJpg');

module.exports = defineConfig({
  reporter: 'mocha-allure-reporter',
  reporterOptions: {
    allureResultsPath: 'allure-results',
  },
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1280,
  viewportHeight: 864,
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 1200000,
  pageLoadTimeout: 1200000,
  requestTimeout: 800000,
  responseTimeout: 800000,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  videoCompression: false,
  disableCypressDashboard: true,
  trashAssetsBeforeRuns: false,
  projectId: "e7vrap",
  downloadsFolder: path.resolve('C:\\home\\workspace\\GODOYCRUZ'), // Asegúrate de usar ruta absoluta
  e2e: {
    setupNodeEvents(on, config) {
      // Usamos path.resolve para asegurarnos de que las rutas son absolutas
      const downloadsPath = path.resolve(config.env.downloadsFolder || 'C:\\home\\workspace\\GODOYCRUZ');

      // Configuración de Allure Writer
      allureWriter(on, config);

      // Registrar las tareas
      on('task', {

        renameFile({ from, to }) {
          return new Promise((resolve, reject) => {
            if (fs.existsSync(from)) {
              fs.rename(from, to, (err) => {
                if (err) reject(err);
                else resolve(true);
              });
            } else {
              resolve(false);
        }
      });
    },
        downloadFile,
        fileExists(filePath) {
          return fs.existsSync(filePath);
        },

        convertPdfToJpg({ pdfPath, outputDir }) {
          return convertPdfToJpg(pdfPath, outputDir);
        },
        
        parsePdf({ filePath }) {
          const dataBuffer = fs.readFileSync(filePath);
          return pdfParse(dataBuffer).then(data => {
            return data.text;
          });
        },
        unzipFile({ zipPath, extractTo }) {
          return new Promise((resolve, reject) => {
            fs.createReadStream(zipPath)
              .pipe(unzipper.Extract({ path: extractTo }))
              .on('close', () => resolve(true))
              .on('error', (err) => reject(err));
          });
        },
        deleteFile(filePath) {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return true;
          }
          return false;
        },
      });

      // Configuración para cypress-image-snapshot
      const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
      addMatchImageSnapshotPlugin(on, config);

      // Configuración para el lanzamiento de los navegadores
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-extensions');
          launchOptions.args.push('--disable-software-rasterizer');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-pdf-viewer');
          launchOptions.args.push('--disable-print-preview');
          launchOptions.args.push('--kiosk-printing');
          if (config.isHeadless) {
            launchOptions.args.push('--headless');
          }
          launchOptions.preferences.default = {
            'download': {
              'default_directory': downloadsPath,
              'prompt_for_download': false,
              'directory_upgrade': true,
              'extensions_to_open': ''
            },
            'plugins.plugins_disabled': ['Chrome PDF Viewer'],
            'plugins.always_open_pdf_externally': true,
            'savefile.default_directory': downloadsPath,
            'download.extensions_to_open': 'false',
            'pdfjs.disabled': true,
            'profile.default_content_settings.popups': 0,
            'profile.content_settings.exceptions.automatic_downloads.*.setting': 1
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
      downloadsFolder: path.resolve('C:\\home\\workspace\\GODOYCRUZ'), // Usar ruta absoluta aquí también
    }
  }
});