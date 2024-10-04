pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                // Función para ejecutar las pruebas en un agente específico
                script {
                    def agents = ["Agent2_1", "Agent2_2", "Agent2_3", "Agent2_4", "Agent2_5", "Agent2_6", "Agent2_7", "Agent2_8"]
                    agents.each { agentLabel ->
                        stage(agentLabel) {
                            agent { label agentLabel }
                            steps {
                                git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                                bat 'npm install'
                                bat 'npm update'
                                script {
                                    try {
                                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                                    } catch (e) {
                                        echo "Cypress test falló en ${agentLabel}, pero continuando."
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // Combinar los resultados de Allure
        stage('Unstash Allure Results') {
            steps {
                (1..8).each { index ->
                    unstash "allure-results-${index}"
                }
            }
        }

        stage('Check Allure Results') {
            steps {
                script {
                    def allureDir = 'C:\\home\\workspace\\GC_Cypress_Pipeline*\\allure-results'
                    def files = findFiles(glob: allureDir)

                    if (files.size() > 0) {
                        echo '¡Resultados de Allure encontrados!'
                    } else {
                        echo '¡Resultados de Allure no encontrados! Continuando con el pipeline.'
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


