@echo off
setlocal EnableDelayedExpansion

set BOT_TOKEN=7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o
set CHAT_ID=2021931547
set MESSAGE=

rem Ejecutar pruebas y capturar el resultado
call npx cypress run --browser chrome --spec "cypress/e2e/1-Loguin/1-Login_GC_PO.cy.js" --reporter mocha-allure-reporter > result.log 2>&1
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
pause




