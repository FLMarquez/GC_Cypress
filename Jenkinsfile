pipeline {
    agent any

    tools { nodejs "node" }

    stages {
        // Conectar a la VPN antes de ejecutar las pruebas
        stage('Connect to VPN') {
            steps {
                script {
                    // Ejecutar connect_vpn.bat
                    bat 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\connect_vpn.bat'
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins si existen
                        bat '''
                        if exist "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" (
                            move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins si existen
                        bat '''
                        if exist "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" (
                            move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins si existen
                        bat '''
                        if exist "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" (
                            move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins si existen
                        bat '''
                        if exist "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" (
                            move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
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
                        bat 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel'
                        
                        // Mover los archivos PDF descargados al workspace de Jenkins si existen
                        bat '''
                        if exist "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" (
                            move "C:\\Users\\Lmarquez\\Desktop\\GodoyCuz_Cypress\\cypress\\downloads\\*.pdf" "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\"
                        ) else (
                            echo No PDF files found to move.
                        )
                        '''
                    }
                }
            }
        }

        // Desconectar de la VPN después de ejecutar las pruebas
        stage('Disconnect from VPN') {
            steps {
                script {
                    // Ejecutar disconnect_vpn.bat
                    bat 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\disconnect_vpn.bat'
                }
            }
        }
    }
}
