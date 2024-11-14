pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        script {
                            runCypressTests('allure-results-1')
                        }
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        script {
                            runCypressTests('allure-results-2')
                        }
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        script {
                            runCypressTests('allure-results-3')
                        }
                    }
                }
                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        script {
                            runCypressTests('allure-results-4')
                        }
                    }
                }
                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        script {
                            runCypressTests('allure-results-5')
                        }
                    }
                }
                stage('Slave 6') {
                    agent { label "Agent2_6" }
                    steps {
                        script {
                            runCypressTests('allure-results-6')
                        }
                    }
                }
                stage('Slave 7') {
                    agent { label "Agent2_7" }
                    steps {
                        script {
                            runCypressTests('allure-results-7')
                        }
                    }
                }
                stage('Slave 8') {
                    agent { label "Agent2_8" }
                    steps {
                        script {
                            runCypressTests('allure-results-8')
                        }
                    }
                }
            }
        }
    



 // Nueva etapa específica para el archivo de prueba de descarga de PDF
        stage('Cypress Test - Emision Deuda PDF') {
            agent { label "Agent2_1" } // Puedes cambiar el agente si es necesario
            steps {
                script {
                    try {
                        // Ejecución de Cypress para el archivo específico sin headless
                        def exitCode = bat(script: 'npx cypress run --spec "cypress/e2e/proyectoCuatro_Emision_Deuda_ATPrimaria_PO.cy.js" --browser chrome --env allure=true --config-file cypress.config.js', returnStatus: true)
                        if (exitCode != 0) {
                            currentBuild.result = 'UNSTABLE'
                            echo "Cypress test falló con código de salida: ${exitCode}"
                        } else {
                            echo "Cypress test completado exitosamente."
                        }
                    } catch (e) {
                        echo "Error durante la ejecución de Cypress: ${e.message}"
                        currentBuild.result = 'UNSTABLE'
                    } finally {
                        bat """
                        if exist allure-results\\*.xml (
                            xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\
                        ) else (
                            echo "No se encontraron archivos .xml en allure-results."
                        )
                        """
                    }
                }
            }
        }
    }
}


// Función para correr las pruebas de Cypress
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        //bat 'npm install'
        //bat 'npm ci' 
        try {
           def exitCode = bat(script: 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true --config-file cypress.config.js --headless', returnStatus: true)
            if (exitCode != 0) {
                currentBuild.result = 'UNSTABLE'
                echo "Cypress test falló con código de salida: ${exitCode}"
            } else {
                echo "Cypress test completado exitosamente."
            }
        } catch (e) {
            echo "Error durante la ejecución de Cypress: ${e.message}"
            currentBuild.result = 'UNSTABLE'
          } finally {
            // Verificar si existen archivos y luego moverlos al directorio especificado
            bat """
            if exist allure-results\\*.xml (
                xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\
            ) else (
                echo "No se encontraron archivos .xml en allure-results."
            )
            """
        }
    }
}
