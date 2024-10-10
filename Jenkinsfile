pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        // stage('Conectar a la VPN') {
        //     steps {
        //         script {
        //             def maxRetries = 4
        //             def retryCount = 0
        //             def vpnConnectStatus = -1
                    
        //             while (retryCount < maxRetries && vpnConnectStatus != 0) {
        //                 vpnConnectStatus = bat(script: 'C:\\home\\workspace\\GODOYCRUZ\\VPN.bat', returnStatus: true)
        //                 if (vpnConnectStatus != 0) {
        //                     retryCount++
        //                     echo "Intento ${retryCount} fallido. Código de salida: ${vpnConnectStatus}. Volviendo a intentar..."
        //                     sleep(5000) // Esperar 5 segundos antes del siguiente intento
        //                 } else {
        //                     echo "Conexión a la VPN realizada exitosamente."
        //                 }
        //             }

        //             if (vpnConnectStatus != 0) {
        //                 error "Error al intentar conectar a la VPN después de ${maxRetries} intentos. Código de salida: ${vpnConnectStatus}"
        //             }
        //         }
        //     }
        // }

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

        // Desconectar la VPN
        // stage('Desconectar la VPN') {
        //     steps {
        //         script {
        //             // Desconectar la VPN
        //             bat 'powershell -Command "Start-Process \'C:\\Program Files\\Fortinet\\FortiClient\\FortiClient.exe\' -ArgumentList \'-s vpndisconnect\' -Wait"'
        //         }
        //     }
        // }
    }
}

// Función para correr las pruebas de Cypress y stashear los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        bat 'npm install'
        bat 'npm update'
        try {
            def exitCode = bat(script: 'npx cypress run --headed --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true --config-file cypress.config.js', returnStatus: true)
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


