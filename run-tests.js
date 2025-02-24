const { exec } = require("child_process");
const fs = require("fs");

// Configuración de Telegram
const BOT_TOKEN = "7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o";
const CHAT_ID = "2021931547";

// Definir los comandos de Cypress
const commands = [
    `npx cypress run --browser firefox --spec "cypress/e2e/4-Atencion Primaria/1-Atencion_Primaria_Emision_Deuda.cy.js" --reporter mocha-allure-reporter >> result.log 2>&1`,

    `npx cypress run --browser chrome --headless --spec "cypress/e2e/1-Loguin/1-Login_GC_PO.cy.js,cypress/e2e/2-Personas/1-Personas_Valida_Pantalla.cy.js,cypress/e2e/2-Personas/2-Personas_Actualizacion_Datos.cy.js,cypress/e2e/2-Personas/3-Personas_Crear_Nuevo_Domicilio.cy.js,cypress/e2e/3-Objetos/1-Objetos_Validar_Pantalla.cy.js,cypress/e2e/3-Objetos/2-Objetos_Actividades_Comercio.cy.js,cypress/e2e/3-Objetos/3-Objetos_Consultar_Operacion_Catastro.cy.js,cypress/e2e/4-Atencion Primaria/2-Lectura-PDF.cy.js,cypress/e2e/pdfTojpg.cy.js,cypress/e2e/4-Emision de deuda/5-Consulta_de_Comprobantes.cy.js,cypress/e2e/5-Apremio/1-Apremio.cy.js,cypress/e2e/6-Juzgado_Faltas/1-Juzgado_Falta.cy.js,cypress/e2e/7-Emision_Tasas/1-Emision_Tasas.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web4.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web5.cy.js" --reporter mocha-allure-reporter >> result.log 2>&1`,

    `npx cypress run --browser chrome --headed --spec "cypress/e2e/4-Atencion Primaria/4-Verificar_Imagen.cy.js" --reporter mocha-allure-reporter >> result.log 2>&1`
];

// Función para ejecutar los comandos en orden
const runCommands = (index = 0) => {
    if (index >= commands.length) {
        console.log("✅ Todas las pruebas se han ejecutado.");
        checkResultsAndNotify(); // Verificar resultados y notificar
        return;
    }

    console.log(`🚀 Ejecutando: ${commands[index]}`);
    exec(commands[index], (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Error en el comando ${index + 1}: ${error.message}`);
        }
        if (stderr) {
            console.error(`⚠ stderr: ${stderr}`);
        }
        console.log(`📜 stdout:\n${stdout}`);

        // Ejecutar el siguiente comando después de que termine el actual
        runCommands(index + 1);
    });
};

// Función para verificar el resultado y enviar notificación a Telegram
const checkResultsAndNotify = () => {
    fs.readFile("result.log", "utf8", (err, data) => {
        if (err) {
            console.error("❌ Error al leer el archivo de resultados:", err);
            return;
        }

        let message = "";
        if (data.includes("All specs passed!")) {
            message = "✅ Todas las pruebas pasaron exitosamente.";
        } else {
            message = "❌ Una o más pruebas fallaron. Revisa los detalles en el reporte de Allure.";
        }

        sendTelegramMessage(message);
        generateAllureReport();
    });
};

// Función para enviar mensaje a Telegram
const sendTelegramMessage = (message) => {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const command = `curl -X POST "${url}" -d "chat_id=${CHAT_ID}" -d "text=${message}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error("❌ Error al enviar mensaje a Telegram:", error);
        }
        if (stderr) {
            console.error(`⚠ stderr: ${stderr}`);
        }
        console.log("📢 Mensaje enviado a Telegram:", message);
    });
};

// Función para generar y abrir reporte de Allure
const generateAllureReport = () => {
    console.log("📊 Generando reporte de Allure...");
    exec("allure generate allure-results --clean -o allure-report", (error) => {
        if (error) {
            console.error("❌ Error al generar el reporte de Allure:", error);
            return;
        }

        console.log("📂 Reporte de Allure generado con éxito.");
        exec("allure open allure-report");
    });
};

// Iniciar la ejecución de pruebas
runCommands();

