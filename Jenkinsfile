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
                        runCypressTests('allure-results-1')
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        runCypressTests('allure-results-2')
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        runCypressTests('allure-results-3')
                    }
                }
                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        runCypressTests('allure-results-4')
                    }
                }
                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        runCypressTests('allure-results-5')
                    }
                }
                stage('Slave 6') {
                    agent { label "Agent2_6" }
                    steps {
                        runCypressTests('allure-results-6')
                    }
                }
                stage('Slave 7') {
                    agent { label "Agent2_7" }
                    steps {
                        runCypressTests('allure-results-7')
                    }
                }
                stage('Slave 8') {
                    agent { label "Agent2_8" }
                    steps {
                        runCypressTests('allure-results-8')
                    }
                }
            }
        }

        // Combinar los resultados de Allure
        stage('Unstash Allure Results') {
            steps {
                unstash 'allure-results-1'
                unstash 'allure-results-2'
                unstash 'allure-results-3'
                unstash 'allure-results-4'
                unstash 'allure-results-5'
                unstash 'allure-results-6'
                unstash 'allure-results-7'
                unstash 'allure-results-8'
            }
        }

        // Validar la existencia de los resultados de Allure
        stage('Check Allure Results') {
            steps {
                script {
                    def allureDir = 'C:\\home\\workspace\\GC_Cypress_Pipeline*\\allure-results'
                    def files = findFiles(glob: allureDir)

                    if (files.size() > 0) {
                        echo '¡Resultados de Allure encontrados!'
                    } else {
                        echo '¡Resultados de Allure no encontrados! Continuando con el pipeline.'
                        currentBuild.result = 'UNSTABLE'
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

// Función para correr las pruebas de Cypress y stashear los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        bat 'npm install'
        bat 'npm update'
        try {
            bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'

            // Stashear los resultados de Allure si existen
            stash includes: '**/allure-results/**', name: allureStashName

        } catch (e) {
            echo "Cypress test falló, pero continuando."
            currentBuild.result = 'UNSTABLE'
        }
    }
}




