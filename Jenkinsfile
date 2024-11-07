pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    environment {
        GXSERVER_URL = "http://172.16.114.25/genexusserver17_u5/api/"
        KB_NAME = "SGTFARO17U5"
        VERSION_NAME = "SGTFARO17U5"
        SERVER_USERNAME = "admin"
        SERVER_PASSWORD = "Desa.cba45"
    }

    stages {
        stage('Check for Changes in GxServer') {
            steps {
                script {
                    def hasChanges = checkGxServerForChanges()
                    if (!hasChanges) {
                        echo "No changes detected in GxServer. Skipping build."
                        currentBuild.result = 'NOT_BUILT'
                        return
                    }
                }
            }
        }
        
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
    }
}

// Función para verificar cambios en GxServer usando su API
def checkGxServerForChanges() {
    try {
        def response = sh(script: """
            curl -s -u ${env.SERVER_USERNAME}:${env.SERVER_PASSWORD} \
            "${env.GXSERVER_URL}repositories/${env.KB_NAME}/versions/${env.VERSION_NAME}/commits" | jq '.commits'
        """, returnStdout: true).trim()
        
        // Si hay commits en la respuesta, significa que hay cambios
        return response != "[]"
    } catch (Exception e) {
        echo "Error checking GxServer for changes: ${e.message}"
        return false
    }
}

// Función para ejecutar pruebas de Cypress y guardar los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        
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
            // Copiar los archivos de Allure al directorio centralizado
            bat "xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\"
        }
    }
}
