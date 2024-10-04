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
                        runCypressTests()
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        runCypressTests()
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        runCypressTests()
                    }
                }
                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        runCypressTests()
                    }
                }
                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        runCypressTests()
                    }
                }
                stage('Slave 6') {
                    agent { label "Agent2_6" }
                    steps {
                        runCypressTests()
                    }
                }
                stage('Slave 7') {
                    agent { label "Agent2_7" }
                    steps {
                        runCypressTests()
                    }
                }
                stage('Slave 8') {
                    agent { label "Agent2_8" }
                    steps {
                        runCypressTests()
                    }
                }
            }
        }

        // Combinar los resultados de Allure
        stage('Unstash Allure Results') {
            steps {
                script {
                    (1..8).each { index ->
                        unstash "allure-results-Agent2_${index}"
                    }
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

// Función para correr las pruebas de Cypress
def runCypressTests(String agentLabel) {
    stage("Run Cypress Tests on ${agentLabel}") {
        agent { label agentLabel }
        steps {
            script {
                git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                bat 'npm install'
                bat 'npm update'
                try {
                    bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true'
                    
                    // Stash the allure results after tests
                    stash includes: 'allure-results/**', name: "allure-results-${agentLabel}"
                } catch (e) {
                    echo "Cypress test falló, pero continuando."
                }
            }
        }
    }
}



