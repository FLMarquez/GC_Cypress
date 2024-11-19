pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        stage('Instalación de Cypress') {
            steps {
                script {
                    bat 'npx cypress install'
                }
            }
        }
        stage('Run PDF.bat') {
            steps {
                script {
                    //RUTA LOCAL 
                    //bat 'C:\\Users\\Lmarquez\\Desktop\\DescargaPDF-ATPRIMARIA\\PDF.bat'
                    //RUTA SERVER - ELINPAR
                    bat 'C:\\jenkins_agent\\workspace\\DescargaPDF-ATPRIMARIA'
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
        //stage('Generar y Abrir Reporte Allure') {
            //steps {
                //script {
                    //bat """
                    //cd C:\\home\\workspace\\GC_Cypress_Pipeline && allure generate allure-results --clean -o allure-report && allure open allure-report
                   // """
               // }
            //}
        //}
    }
}

// Función para correr las pruebas de Cypress
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        
        // Instalación de Cypress antes de ejecutar las pruebas
        bat 'npx cypress install'
        
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
            //RUTA LOCAL
       // } finally {
           // bat """
           // if exist allure-results\\*.xml (
                //xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\
           // ) else (
                //echo "No se encontraron archivos .xml en allure-results."
            //)
           // """
        //}

        //RUTA SERVER - ELINPAR
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