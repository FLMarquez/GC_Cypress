pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        stage('Install Allure') {
            steps {
                script {
                    try {
                        bat '''
                        curl -o allure.zip -L "https://repo.maven.apache.org/content/repositories/releases/io/qameta/allure/allure-commandline/2.13.9/allure-commandline-2.13.9.zip"
                        mkdir allure
                        powershell -Command "Remove-Item 'C:\\home\\workspace\\GC_Cypress_Pipeline\\allure\\allure-2.13.9\\plugins\\jira-plugin\\lib\\*' -Force"
                        powershell -Command "Expand-Archive -Path allure.zip -DestinationPath allure"
                        '''
                    } catch (e) {
                        echo "Error instalando Allure, pero continuando con el pipeline."
                    }
                }
            }
        }

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

        stage('Check Allure Results') {
            steps {
                script {
                    if (fileExists('allure-results')) {
                        echo '¡Resultados de Allure encontrados!'
                    } else {
                        error '¡Resultados de Allure no encontrados! Deteniendo el pipeline.'
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    try {
                        bat '"C:\\Program Files\\allure-2.30.0\\bin\\allure" generate allure-results --clean -o allure-report'
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
