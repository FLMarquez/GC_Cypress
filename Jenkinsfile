pipeline {
    agent any

    tools { nodejs "node" }

    stages {
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins
                        bat 'move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"'
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins
                        bat 'move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"'
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins
                        bat 'move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"'
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins
                        bat 'move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"'
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins
                        bat 'move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"'
                    }
                }
            }
        }
    }
}
