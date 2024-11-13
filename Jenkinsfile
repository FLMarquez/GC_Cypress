pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        // Ejecución en paralelo de los tests en diferentes agentes
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

        // Nuevo stage para copiar archivos después de finalizar las pruebas
        stage('Copy Allure Results') {
            steps {
                script {
                    bat "xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\"
                }
            }
        }
    }
}

// Función para correr las pruebas de Cypress y almacenar los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        bat 'npm install'
        bat 'npm ci' 
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
            // Guardar resultados de Allure en el directorio local del agente
            bat "mkdir allure-results"
            bat "move *.xml allure-results"
        }
    }
}
