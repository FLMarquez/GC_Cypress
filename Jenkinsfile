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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 1"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 2"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 3"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 4"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 5"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 6"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 7"
                                }
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
                                if (fileExists('allure-results')) {
                                    stash includes: 'allure-results/**', name: 'allure-results'
                                } else {
                                    echo "No se encontraron resultados de Allure en Slave 8"
                                }
                            } catch (e) {
                                echo "Cypress test falló en Slave 8, pero continuando."
                            }
                        }
                    }
                }
            }
        }

        // Combinar los resultados de Allure
        stage('Unstash Allure Results') {
            steps {
                unstash 'allure-results'
                unstash 'allure-results'
                unstash 'allure-results'
                unstash 'allure-results'
                unstash 'allure-results'
                unstash 'allure-results'
                unstash 'allure-results'
                unstash 'allure-results'
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
