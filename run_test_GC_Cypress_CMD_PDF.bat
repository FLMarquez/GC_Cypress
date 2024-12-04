@echo off
rem Ejecutar prueba en Firefox
npx cypress run --browser firefox --spec "cypress/e2e/4-Atencion Primaria/1-Atencion_Primaria_Emision_Deuda.cy.js" --reporter mocha-allure-reporter

pause
