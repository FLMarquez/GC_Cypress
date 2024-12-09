pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir() // Limpia todo el contenido del workspace
            }
        }

        stage('Clean Jenkins Workspace') {
            steps {
                cleanWs() // Limpia el workspace de Jenkins
            }
        }

        stage('Clean Cypress Cache') {
            steps {
                script {
                    cleanDirectory('%USERPROFILE%\\AppData\\Roaming\\Cypress')
                }
            }
        }

        stage('Clean Firefox Profiles') {
            steps {
                script {
                    cleanDirectory('%USERPROFILE%\\AppData\\Roaming\\Mozilla\\Firefox')
                }
            }
        }

        stage('Checkout Code') {
            steps {
                checkout scm // Realiza un checkout del repositorio
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Instala las dependencias necesarias y Cypress
                    bat 'npm install'
                    bat 'npx cypress install --force'
                }
            }
        }

        stage('Run PDF.bat') {
            steps {
                script {
                    // Ejecuta el script para descargar PDFs
                    bat 'C:\\home\\workspace\\DescargaPDF-ATPRIMARIA\\PDF.bat'
                }
            }
        }

        stage('Run test_cmd_telegram_allure.bat') {
            steps {
                script {
                    // Ejecuta el script para Telegram y Allure
                    bat 'C:\\home\\workspace\\Test_Allure_Telegram\\test_cmd_telegram_allure.bat'
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

// Función para limpiar directorios
def cleanDirectory(path) {
    bat "rmdir /S /Q ${path} || echo 'No directory found at ${path}'"
}

// Función para correr las pruebas de Cypress
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git' // Clona el repositorio
        try {
            // Ejecuta las pruebas de Cypress
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
            // Mueve los resultados de las pruebas a la ubicación central
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


