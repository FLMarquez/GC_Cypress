pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('Conectar a la VPN') {
            steps {
                script {
                    // Conectar a la VPN
                    bat '''
                    powershell -Command "
                    $process = Start-Process 'C:\\Program Files\\Fortinet\\FortiClient\\FortiClient.exe' -ArgumentList '-s vpn -h https://vpn-cba.elinpar.com:10443 -u Lmarquez -p Lm4rqu3zzz' -PassThru;
                    $process.WaitForExit();
                    if ($process.ExitCode -ne 0) { 
                    exit $process.ExitCode;
                    }
                    "
                    '''

                }
            }
        }

        stage('Verificar conexión VPN') {
            steps {
                script {
                    def vpnCheck = bat(script: 'ping -n 1 10.200.130.12', returnStatus: true) 
                    if (vpnCheck != 0) {
                        error("La VPN no está conectada o la IP no es accesible.")
                    } else {
                        echo "Conexión VPN establecida."
                    }
                }
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        script {
                            runCypressTests('allure-results-1')
                        }
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        script {
                            runCypressTests('allure-results-2')
                        }
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        script {
                            runCypressTests('allure-results-3')
                        }
                    }
                }
                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        script {
                            runCypressTests('allure-results-4')
                        }
                    }
                }
                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        script {
                            runCypressTests('allure-results-5')
                        }
                    }
                }
                stage('Slave 6') {
                    agent { label "Agent2_6" }
                    steps {
                        script {
                            runCypressTests('allure-results-6')
                        }
                    }
                }
                stage('Slave 7') {
                    agent { label "Agent2_7" }
                    steps {
                        script {
                            runCypressTests('allure-results-7')
                        }
                    }
                }
                stage('Slave 8') {
                    agent { label "Agent2_8" }
                    steps {
                        script {
                            runCypressTests('allure-results-8')
                        }
                    }
                }
            }
        }
    }
}

// Función para correr las pruebas de Cypress y stashear los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        bat 'npm ci'
        try {
            def exitCode = bat(script: 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true', returnStatus: true)
            if (exitCode != 0) {
                currentBuild.result = 'UNSTABLE'
                echo "Cypress test falló con código de salida: ${exitCode}"
            } else {
                echo "Cypress test completado exitosamente."
            }
        } catch (e) {
            echo "Error durante la ejecución de Cypress: ${e.message}"
            currentBuild.result = 'UNSTABLE'
        }
    }
}
