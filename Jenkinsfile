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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@1\\allure_results\\Slave1_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@1\\allure_results\\Slave1_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@2\\allure_results\\Slave2_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@2\\allure_results\\Slave2_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@3\\allure_results\\Slave3_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@3\\allure_results\\Slave3_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@4\\allure_results\\Slave4_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@4\\allure_results\\Slave4_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
                            } catch (e) {
                                echo "Cypress test failed in Slave 4, continuing"
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@5\\allure_results\\Slave5_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@5\\allure_results\\Slave5_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
                            } catch (e) {
                                echo "Cypress test failed in Slave 5, continuing"
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@6\\allure_results\\Slave6_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@6\\allure_results\\Slave6_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
                            } catch (e) {
                                echo "Cypress test failed in Slave 6, continuing"
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@7\\allure_results\\Slave7_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@7\\allure_results\\Slave7_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
                            } catch (e) {
                                echo "Cypress test failed in Slave 7, continuing"
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
                                bat 'mkdir C:\\home\\workspace\\GC_Cypress_Pipeline@8\\allure_results\\Slave8_results || exit 0'
                                bat '''
                                if exist "allure-results" (
                                    move "allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline@8\\allure_results\\Slave8_results" /Y
                                ) else (
                                    echo "No allure-results directory found"
                                )
                                '''
                            } catch (e) {
                                echo "Cypress test failed in Slave 8, continuing"
                            }
                        }
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    bat '''
                    mkdir C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined || exit 0
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@1\\allure_results\\Slave1_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave1_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@2\\allure_results\\Slave2_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave2_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@3\\allure_results\\Slave3_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave3_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@4\\allure_results\\Slave4_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave4_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@5\\allure_results\\Slave5_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave5_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@6\\allure_results\\Slave6_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave6_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@7\\allure_results\\Slave7_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave7_results" /Y
                    move "C:\\home\\workspace\\GC_Cypress_Pipeline@8\\allure_results\\Slave8_results\\allure-results" "C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined\\Slave8_results" /Y

                    allure serve C:\\home\\workspace\\GC_Cypress_Pipeline\\allure_results\\combined
                    '''
                }
            }
        }
    }
}





