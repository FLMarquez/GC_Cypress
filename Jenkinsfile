pipeline {
    agent any

    tools {
        nodejs "node"
    }

    environment {
        BOT_TOKEN = "7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o"
        CHAT_ID = "2021931547"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npx cypress install --force'
                }
            }
        }

        stage('Run Cypress Tests in Parallel') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/1-Loguin/1-Login_GC_PO.cy.js')
                        }
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/2-Personas/1-Personas_Valida_Pantalla.cy.js')
                        }
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/2-Personas/2-Personas_Actualizacion_Datos.cy.js')
                        }
                    }
                }
                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/2-Personas/3-Personas_Crear_Nuevo_Domicilio.cy.js')
                        }
                    }
                }
                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/3-Objetos/1-Objetos_Validar_Pantalla.cy.js')
                        }
                    }
                }
                stage('Slave 6') {
                    agent { label "Agent2_6" }
                    steps {
                        script {
                            runCypressTests('firefox', 'cypress/e2e/4-Atencion Primaria/1-Atencion_Primaria_Emision_Deuda.cy.js')
                        }
                    }
                }
                stage('Slave 7') {
                    agent { label "Agent2_7" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/5-Apremio/1-Apremio.cy.js')
                        }
                    }
                }
                stage('Slave 8') {
                    agent { label "Agent2_8" }
                    steps {
                        script {
                            runCypressTests('chrome', 'cypress/e2e/6-Juzgado_Faltas/1-Juzgado_Falta.cy.js')
                        }
                    }
                }
            }
        }

        stage('Generate and Open Allure Report') {
            steps {
                script {
                    bat 'allure generate allure-results --clean -o allure-report'
                    bat 'allure open allure-report'
                }
            }
        }
    }

    post {
        always {
            script {
                sendTelegramMessage()
            }
            echo "Pipeline terminado."
        }
    }
}

// Función para correr las pruebas de Cypress
def runCypressTests(browser, specFiles) {
    try {
        def exitCode = bat(
            script: "npx cypress run --browser ${browser} --spec \"${specFiles}\" --reporter mocha-allure-reporter > result-${browser}-${specFiles}.log 2>&1",
            returnStatus: true
        )

        if (exitCode != 0) {
            currentBuild.result = 'UNSTABLE'
            echo "Cypress test falló con código de salida: ${exitCode} en navegador: ${browser}"
        } else {
            echo "Cypress test completado exitosamente en navegador: ${browser}."
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

// Función para enviar mensaje por Telegram
def sendTelegramMessage() {
    def logContent = readFile('result-chrome.log') + readFile('result-firefox.log')
    def message = logContent.contains("All specs passed!") 
        ? "Todas las pruebas pasaron exitosamente." 
        : "Una o más pruebas fallaron. Revisa los detalles."

    bat """
    curl -X POST "https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage" ^
        -d "chat_id=${env.CHAT_ID}" ^
        -d "text=${message}"
    """
}
