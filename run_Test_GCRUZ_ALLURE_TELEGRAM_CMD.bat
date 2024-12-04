@echo off
setlocal EnableDelayedExpansion

rem Configuración para Telegram
set BOT_TOKEN=7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o
set CHAT_ID=2021931547
set MESSAGE=

rem Ejecutar pruebas en Firefox
echo Ejecutando prueba en Firefox...
call npx cypress run --browser firefox --spec "cypress/e2e/4-Atencion Primaria/1-Atencion_Primaria_Emision_Deuda.cy.js" --reporter mocha-allure-reporter > result.log 2>&1
findstr /C:"All specs passed!" result.log >nul
if !ERRORLEVEL! equ 0 (
    set MESSAGE=Prueba en Firefox pasó exitosamente.
) else (
    set MESSAGE=Prueba en Firefox falló. Revisa los detalles.
)

rem Ejecutar pruebas en Chrome
echo Ejecutando pruebas en Chrome...
call npx cypress run --browser chrome --spec "cypress/e2e/1-Loguin/1-Login_GC_PO.cy.js,cypress/e2e/2-Personas/1-Personas_Valida_Pantalla.cy.js,cypress/e2e/2-Personas/2-Personas_Actualizacion_Datos.cy.js,cypress/e2e/2-Personas/3-Personas_Crear_Nuevo_Domicilio.cy.js,cypress/e2e/3-Objetos/1-Objetos_Validar_Pantalla.cy.js,cypress/e2e/4-Atencion Primaria/2-Lectura-PDF.cy.js,cypress/e2e/5-Apremio/1-Apremio.cy.js,cypress/e2e/6-Juzgado_Faltas/1-Juzgado_Falta.cy.js,cypress/e2e/7-Emision_Tasas/1-Emision_Tasas.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web4.cy.js" --reporter mocha-allure-reporter >> result.log 2>&1
findstr /C:"All specs passed!" result.log >nul
if !ERRORLEVEL! equ 0 (
    set MESSAGE=!MESSAGE! Todas las pruebas en Chrome pasaron exitosamente.
) else (
    set MESSAGE=!MESSAGE! Una o más pruebas en Chrome fallaron. Revisa los detalles.
)

rem Generar el reporte de Allure
echo Generando reporte de Allure...
call allure generate allure-results --clean -o allure-report >> result.log 2>&1
if !ERRORLEVEL! neq 0 (
    set MESSAGE=!MESSAGE! Falló la generación del reporte de Allure. >> result.log
)

rem Abrir el reporte de Allure
echo Abriendo reporte de Allure...
call allure open allure-report >> result.log 2>&1
if !ERRORLEVEL! neq 0 (
    set MESSAGE=!MESSAGE! Falló la apertura del reporte de Allure. >> result.log
)

rem Enviar mensaje de estado a Telegram
echo Enviando mensaje a Telegram...
curl -X POST "https://api.telegram.org/bot%BOT_TOKEN%/sendMessage" ^
    -d "chat_id=%CHAT_ID%" ^
    -d "text=%MESSAGE%" >> result.log 2>&1

pause

