pipeline {
    agent any

    tools { nodejs "node" }

    stages {
        stage('Cleanup') {
            steps {
                script {
                    // Eliminar archivos de video antiguos antes de ejecutar las pruebas
                    bat 'del /Q "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\videos\\*"'
                    bat 'del /Q "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline@2\\cypress\\videos\\*"'
                }
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                     steps {
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        // Modificar aquí para ejecutar solo una prueba específica
                        bat 'npx cypress run --spec "cypress/e2e/1-Atencion_Primaria_Emision_Deuda.cy.js" --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser firefox'

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
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        // Modificar aquí para ejecutar solo una prueba específica
                        bat 'npx cypress run --spec "cypress/e2e/1-Atencion_Primaria_Emision_Deuda.cy.js" --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser firefox'

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
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        // Modificar aquí para ejecutar solo una prueba específica
                        bat 'npx cypress run --spec "cypress/e2e/1-Atencion_Primaria_Emision_Deuda.cy.js" --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser firefox'

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
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        // Modificar aquí para ejecutar solo una prueba específica
                        bat 'npx cypress run --spec "cypress/e2e/1-Atencion_Primaria_Emision_Deuda.cy.js" --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser firefox'

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
                        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        // Modificar aquí para ejecutar solo una prueba específica
                        bat 'npx cypress run --spec "cypress/e2e/1-Atencion_Primaria_Emision_Deuda.cy.js" --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser firefox'

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
    }
}
