pipeline {
    agent any

    tools { nodejs "node" }

    stages {
        stage('Install Allure') {
            steps {
                bat '''
                curl -o allure.zip -L "https://repo.maven.apache.org/content/repositories/releases/io/qameta/allure/allure-commandline/2.13.9/allure-commandline-2.13.9.zip"
                mkdir allure
                tar -xvf allure.zip -C allure --strip-components=1
                '''
            }
        }

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
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    // Generar el informe de Allure usando la ruta absoluta
                    bat '"C:\\Program Files\\allure-2.30.0\\bin\\allure" generate allure-results --clean -o allure-report'
                    // bat 'allure open allure-report' // Comentado para evitar problemas en CI
                }
            }
        }
    }
}

def runCypressTests() {
    steps {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        bat 'npm install'
        bat 'npm update'
        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --reporter mocha-allure-reporter'

        // Mover los archivos PDF descargados al workspace de Jenkins si existen
        bat '''
        if exist "C:\\Users\\Lmarquez\\Downloads\\*.pdf" (
            move "C:\\Users\\Lmarquez\\Downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\" 
        ) else (
            echo No PDF files found to move.
        )
        '''
    }
}


