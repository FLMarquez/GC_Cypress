pipeline {
    agent any

    tools { nodejs "node" }

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
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    bat '"C:\\Program Files\\allure-2.30.0\\bin\\allure" generate allure-results --clean -o allure-report'
                }
            }
        }
    }

    post {
        always {
            echo 'Generando informe de Allure...'
            allure([
                path: 'allure-results', // Cambia esta ruta si es necesario
                includeProperties: false,
                jdk: '' // Puedes especificar una versión de JDK si es necesario
            ])
        }
        success {
            echo '¡La construcción fue exitosa!'
        }
        failure {
            echo '¡La construcción falló!'
        }
    }
}

def runCypressTests() {
    return {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        bat 'npm install'
        bat 'npm update'
        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --reporter mocha-allure-reporter'
        
        // Mover los archivos PDF descargados al workspace de Jenkins si existen
        movePdfFiles("C:\\Users\\Lmarquez\\Downloads\\*.pdf")
    }
}

def movePdfFiles(String path) {
    bat """
    if exist "${path}" (
        move "${path}" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
    ) else (
        echo No PDF files found to move.
    )
    """
}



