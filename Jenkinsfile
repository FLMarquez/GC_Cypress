pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        //  stage('Instalar Dependencias') {
        //     steps {
        //          bat 'npm install --legacy-peer-deps'
        //     }
        // }

        stage('Run PDF.bat') {
            steps {
                script {
                    // RUTA LOCAL 
                    bat 'C:\\home\\workspace\\DescargaPDF-ATPRIMARIA\\PDF.bat'
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


        stage('Send Telegram Notification') {
    steps {
        script {
            def message = "Todas las pruebas pasaron exitosamente."
            if (currentBuild.result == 'UNSTABLE' || currentBuild.result == 'FAILURE') {
                message = "Una o más pruebas fallaron. Revisa los detalles."
            }
            bat """
            set BOT_TOKEN=7564088844:AAFexajTht_1DT6PW3rU2bcU7KJLWAmnt3o
            set CHAT_ID=2021931547
            set MESSAGE=${message}
            curl -s -X POST "https://api.telegram.org/bot%BOT_TOKEN%/sendMessage" -d chat_id=%CHAT_ID% -d text="%MESSAGE%"
            """
        }
    }
}

 stage('Generate Allure Report') {
    steps {
        script {
            bat '''
            call allure generate allure-results --clean -o allure-report
            start /B allure open allure-report
            '''
        }
    }
}


    }
}

// Función para correr las pruebas de Cypress
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