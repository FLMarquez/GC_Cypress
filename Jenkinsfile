pipeline {
    agent any

    tools { nodejs "node" }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                bat 'npm install'
                bat 'npm update'
            }
        }
        
        stage('Run Cypress Tests Sequentially') {
            steps {
                // 1-Login_GC_PO.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Login_GC_PO.cy.js" --browser chrome'
                
                // 1-Personas_Valida_Pantalla.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Personas_Valida_Pantalla.cy.js" --browser chrome'
                
                // 2-Personas_Actualizacion_Datos.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Personas_Actualizacion_Datos.cy.js" --browser chrome'
                
                // 3-Personas_Crear_Nuevo_Domicilio.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Personas_Crear_Nuevo_Domicilio.cy.js" --browser chrome'
                
                // 1-Objetos_Validar_Pantalla.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Objetos_Validar_Pantalla.cy.js" --browser chrome'
                
                // 1-Atencion_Primaria_Emision_Deuda.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Atencion_Primaria_Emision_Deuda.cy.js" --browser chrome'
                
                // 2-Lectura-PDF.cy.js
                bat 'npx cypress run --spec "cypress/e2e/Lectura-PDF.cy.js" --browser chrome'
            }
        }

        stage('Move PDF Files') {
            steps {
                bat '''
                if exist "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" (
                    move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
                ) else (
                    echo No PDF files found to move.
                )
                '''
            }
        }
    }
}

