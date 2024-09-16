pipeline {
    agent any

    tools { nodejs "node" }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/FLMarquez/GC_Cypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npm update'
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --spec "cypress/integration/Atencion_Primaria_Emision_Deuda.cy.js"'
                        
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

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --spec "cypress/integration/Lectura-PDF.cy.js"'
                        
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

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --spec "cypress/integration/Atencion_Primaria_Emision_Deuda.cy.js"'
                        
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

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --spec "cypress/integration/Lectura-PDF.cy.js"'
                        
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

                stage('Slave 5') {
                    agent {
                        label "Agent2_5"
                    }
                    steps {
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --spec "cypress/integration/Atencion_Primaria_Emision_Deuda.cy.js"'
                        
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
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Eliminar archivos de video antiguos después de ejecutar las pruebas
                    bat 'del /Q "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\videos\\*"'
                }
            }
        }
    }
}
