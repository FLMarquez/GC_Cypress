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
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                               
                            } catch (e) {
                                echo "Cypress test falló en Slave 1, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 2, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 3, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 4, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 5, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 6') {
                    agent { label "Agent2_6" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 6, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 7') {
                    agent { label "Agent2_7" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 7, pero continuando."
                            }
                        }
                    }
                }

                stage('Slave 8') {
                    agent { label "Agent2_8" }
                    steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        script {
                            try {
                                bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                
                            } catch (e) {
                                echo "Cypress test falló en Slave 8, pero continuando."
                            }
                        }
                    }
                }
            }
        }

        stage('Collect Allure Results') {
            steps {
                script {
                    def stashes = ['allure-results-1', 'allure-results-2', 'allure-results-3', 
                                   'allure-results-4', 'allure-results-5', 
                                   'allure-results-6', 'allure-results-7', 
                                   'allure-results-8']
                    
                    for (stashName in stashes) {
    if (fileExists("ruta_donde_está_guardado/${stashName}")) {
        echo "Archivo ${stashName} encontrado"
        // Aquí puedes realizar otras acciones como copiar o mover el archivo si es necesario
    } else {
        echo "Archivo ${stashName} no encontrado"
    }
}

                }
            }
        }

        stage('Check Allure Results') {
            steps {
                script {
                    if (fileExists('allure-results')) {
                        echo '¡Resultados de Allure encontrados!'
                    } else {
                        echo "No se encontraron resultados de Allure, revisa los logs de Cypress."
                        error '¡Resultados de Allure no encontrados! Deteniendo el pipeline.'
                    }
                }
            }
        }

        stage('List Allure Results') {
            steps {
                script {
                    bat 'dir allure-results'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    try {
                        bat '"%ALLURE_HOME%\\bin\\allure" generate allure-results --clean -o allure-report'
                    } catch (e) {
                        echo "Error generando el reporte de Allure, pero continuando con el pipeline."
                    }
                }
            }
        }

        stage('Archive Allure Report') {
            steps {
                archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
            }
        }
    }
}