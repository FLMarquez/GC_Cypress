pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    environment {
        GXSERVER_URL = "http://172.16.114.25/genexusserver17_u5/api/"
        KB_NAME = "SGTFARO17U5"
        VERSION_NAME = "SGTFARO17U5"
        ServerUsername = "admin"
        ServerPassword = "Desa.cba45"
    }

    stages {
        stage('Check for Changes in GxServer') {
            steps {
                script {
                    if (checkGxServerForChanges()) {
                        currentBuild.result = 'SUCCESS'
                    } else {
                        currentBuild.result = 'NOT_BUILT'
                        error("No changes detected in GxServer. Skipping build.")
                    }
                }
            }
        }

        stage('Cypress Parallel Test Suite') {
            when {
                expression { currentBuild.result == 'SUCCESS' }
            }
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

// Función para verificar cambios en GxServer sin "nohup"
def checkGxServerForChanges() {
    script {
        // Definir URL para revisar los cambios en GxServer
        def gxUrl = "${GXSERVER_URL}/KnowledgeBases/${KB_NAME}/Versions/${VERSION_NAME}/Commits"
        def auth = "${ServerUsername}:${ServerPassword}"
        
        // Ejecutar el comando curl directamente sin "nohup"
        def output = bat(script: "curl -s -u ${auth} ${gxUrl}", returnStdout: true).trim()
        
        if (output) {
            // Parsear la salida usando jq para verificar si hubo cambios
            def hasChanges = bat(script: "echo ${output} | jq '.items | length > 0'", returnStdout: true).trim()
            
            if (hasChanges == "true") {
                echo "Detected changes in GxServer. Proceeding with the build."
                return true
            } else {
                echo "No changes detected in GxServer. Skipping build."
                return false
            }
        } else {
            echo "Error checking GxServer for changes: No output from curl command."
            return false
        }
    }
}

// Función para correr las pruebas de Cypress y stashear los resultados de Allure
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
            // Copiar los archivos de Allure al directorio centralizado
            bat "xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\"
        }
    }
}
