pipeline {
    agent any

    tools { nodejs "node" }

    stages {
        stage('Install Allure') {
            steps {
                script {
                    try {
                        bat '''
                        curl -o allure.zip -L "https://repo.maven.apache.org/content/repositories/releases/io/qameta/allure/allure-commandline/2.13.9/allure-commandline-2.13.9.zip"
                        mkdir allure
                        powershell -Command "Expand-Archive -Path allure.zip -DestinationPath allure"
                        '''
                    } catch (e) {
                        echo "Error installing Allure, but continuing pipeline"
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
                                echo "Cypress test failed in Slave 1, continuing"
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
                                echo "Cypress test failed in Slave 2, continuing"
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
                                echo "Cypress test failed in Slave 3, continuing"
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
                                echo "Cypress test failed in Slave 3, continuing"
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
                                echo "Cypress test failed in Slave 3, continuing"
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
                                echo "Cypress test failed in Slave 3, continuing"
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
                                echo "Cypress test failed in Slave 3, continuing"
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
                                echo "Cypress test failed in Slave 3, continuing"
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
                        echo 'Allure results found!'
                    } else {
                        error 'Allure results not found! Stopping pipeline.'
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
                        echo "Error generating Allure report, but continuing pipeline"
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




