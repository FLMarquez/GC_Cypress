@echo off
setlocal EnableDelayedExpansion

set BOT_TOKEN=7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o
set CHAT_ID=2021931547
set MESSAGE=

rem Ejecutar prueba en Firefox
call npx cypress run --browser firefox --spec "cypress/e2e/4-Atencion Primaria/1-Atencion_Primaria_Emision_Deuda.cy.js" --reporter mocha-allure-reporter > result.log 2>&1

rem Ejecutar el resto de las pruebas en Chrome en modo headless
call npx cypress run --browser chrome --headless --spec "cypress/e2e/1-Loguin/1-Login_GC_PO.cy.js,cypress/e2e/2-Personas/1-Personas_Valida_Pantalla.cy.js,cypress/e2e/2-Personas/2-Personas_Actualizacion_Datos.cy.js,cypress/e2e/2-Personas/3-Personas_Crear_Nuevo_Domicilio.cy.js,cypress/e2e/3-Objetos/1-Objetos_Validar_Pantalla.cy.js,cypress/e2e/3-Objetos/2-Objetos_Actividades_Comercio.cy.js,cypress/e2e/4-Atencion Primaria/2-Lectura-PDF.cy.js,cypress/e2e/pdfTojpg.cy.js,cypress/e2e/5-Apremio/1-Apremio.cy.js,cypress/e2e/6-Juzgado_Faltas/1-Juzgado_Falta.cy.js,cypress/e2e/7-Emision_Tasas/1-Emision_Tasas.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web4.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web5.cy.js" --reporter mocha-allure-reporter > result.log 2>&1

rem Ejecutar prueba en modo visible para "Verificar Imagen"
call npx cypress run --browser chrome --headed --spec "cypress/e2e/4-Atencion Primaria/4-Verificar_Imagen.cy.js" --reporter mocha-allure-reporter > result.log 2>&1

findstr /C:"All specs passed!" result.log >nul
if !ERRORLEVEL! equ 0 (
    set MESSAGE=Todas las pruebas pasaron exitosamente.
) else (
    set MESSAGE=Una o más pruebas fallaron. Revisa los detalles.
)

rem Enviar mensaje a Telegram
curl -X POST "https://api.telegram.org/bot%BOT_TOKEN%/sendMessage" ^
    -d "chat_id=%CHAT_ID%" ^
    -d "text=%MESSAGE%"

rem Generar y abrir reporte de Allure
call allure generate allure-results --clean -o allure-report
call allure open allure-report

rem Limpieza de archivos y carpetas
rem Eliminar archivos result.log, archivos .xml y videos
del /f /q "C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\result.log"
del /f /q "C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\allure-results\*.xml"
del /f /q "C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\cypress\screenshots\*.png"

rem Eliminar las carpetas dentro de la carpeta videos
for /d %%i in ("C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\cypress\videos\*") do rmdir /s /q "%%i"

rem Eliminar las carpetas dentro de la carpeta screenshots
for /d %%i in ("C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\cypress\screenshots\*") do rmdir /s /q "%%i"

rem Eliminar archivo PDF en la ruta C:\home\workspace\GODOYCRUZ
del /f /q "C:\home\workspace\GODOYCRUZ\*.pdf"

pause