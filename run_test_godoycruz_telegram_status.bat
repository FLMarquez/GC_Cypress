@echo off

set STATUS=OK

rem Crear el archivo de log
set LOGFILE=C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\Pruebas\result.log
echo Iniciando las pruebas... > %LOGFILE%

rem Ejecutar prueba en Firefox y guardar salida en el log
echo Ejecutando prueba en Firefox... >> %LOGFILE%
call npx cypress run --browser firefox --spec "cypress/e2e/4-Atencion Primaria/1-Atencion_Primaria_Emision_Deuda.cy.js" --reporter mocha-allure-reporter >> %LOGFILE% 2>&1
if %ERRORLEVEL% neq 0 (
    set STATUS=NO OK
    echo La prueba en Firefox falló. >> %LOGFILE%
)

rem Ejecutar pruebas en Chrome y guardar salida en el log
echo Ejecutando pruebas en Chrome... >> %LOGFILE%
call npx cypress run --browser chrome --spec "cypress/e2e/1-Loguin/1-Login_GC_PO.cy.js,cypress/e2e/2-Personas/1-Personas_Valida_Pantalla.cy.js,cypress/e2e/2-Personas/2-Personas_Actualizacion_Datos.cy.js,cypress/e2e/2-Personas/3-Personas_Crear_Nuevo_Domicilio.cy.js,cypress/e2e/3-Objetos/1-Objetos_Validar_Pantalla.cy.js,cypress/e2e/4-Atencion Primaria/2-Lectura-PDF.cy.js,cypress/e2e/5-Apremio/1-Apremio.cy.js,cypress/e2e/6-Juzgado_Faltas/1-Juzgado_Falta.cy.js,cypress/e2e/7-Emision_Tasas/1-Emision_Tasas.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web1_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_1.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web3_2.cy.js,cypress/e2e/8-Ingreso Full Web/1-Ingreso_Full_Web4.cy.js" --reporter mocha-allure-reporter >> %LOGFILE% 2>&1
if %ERRORLEVEL% neq 0 (
    set STATUS=NO OK
    echo Una o más pruebas en Chrome fallaron. >> %LOGFILE%
)

rem Generar el reporte de Allure y guardar salida en el log
echo Generando reporte de Allure... >> %LOGFILE%
call allure generate allure-results --clean -o allure-report >> %LOGFILE% 2>&1
if %ERRORLEVEL% neq 0 (
    set STATUS=NO OK
    echo Falló la generación del reporte de Allure. >> %LOGFILE%
)

rem Abrir el reporte localmente y guardar salida en el log
echo Abriendo reporte local... >> %LOGFILE%
call allure open allure-report >> %LOGFILE% 2>&1
if %ERRORLEVEL% neq 0 (
    set STATUS=NO OK
    echo Falló la apertura del reporte de Allure. >> %LOGFILE%
)

rem Enviar mensaje a Telegram con el estado final
echo Enviando mensaje a Telegram... >> %LOGFILE%
curl -X POST "https://api.telegram.org/bot7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o/sendMessage" ^
     -d "chat_id=2021931547" ^
     -d "text=Estado de las pruebas automatizadas: %STATUS%" >> %LOGFILE% 2>&1

pause

