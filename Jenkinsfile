pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        runCypressTests('allure-results-1')
                    }
                }
                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        runCypressTests('allure-results-2')
                    }
                }
                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        runCypressTests('allure-results-3')
                     }
                 }
                // stage('Slave 4') {
                //     agent { label "Agent2_4" }
                //     steps {
                //         runCypressTests('allure-results-4')
                //     }
                // }
                // stage('Slave 5') {
                //     agent { label "Agent2_5" }
                //     steps {
                //         runCypressTests('allure-results-5')
                //     }
                // }
                // stage('Slave 6') {
                //     agent { label "Agent2_6" }
                //     steps {
                //         runCypressTests('allure-results-6')
                //     }
                // }
                // stage('Slave 7') {
                //     agent { label "Agent2_7" }
                //     steps {
                //         runCypressTests('allure-results-7')
                //     }
                // }
                // stage('Slave 8') {
                //     agent { label "Agent2_8" }
                //     steps {
                //         runCypressTests('allure-results-8')
                //     }
                // }
            }
        }

        // Combinar los resultados de Allure
        // stage('Unstash Allure Results') {
        //     steps {
        //         script {
        //             // Desestachar los resultados de cada slave
        //             (1..8).each { i ->
        //                 unstash "allure-results-${i}"
        //             }
        //         }
        //     }
        // }

        // Validar la existencia de los resultados de Allure
        // stage('Check Allure Results') {
        //     steps {
        //         script {
        //             def allureDir = 'C:\\home\\workspace\\GC_Cypress_Pipeline*\\allure-results\\**\\*.xml'
        //             def files = findFiles(glob: allureDir)

        //             if (files.size() > 0) {
        //                 echo '¡Resultados de Allure encontrados!'
        //             } else {
        //                 echo '¡Resultados de Allure no encontrados! Continuando con el pipeline.'
        //                 currentBuild.result = 'UNSTABLE'
        //             }
        //         }
        //     }
        // }

        // stage('List Allure Results') {
        //     steps {
        //         script {
        //             bat 'dir allure-results'
        //         }
        //     }
        // }

        // stage('Generate Allure Report') {
        //     steps {
        //         script {
        //             try {
        //                 bat '"%ALLURE_HOME%\\bin\\allure" generate allure-results --clean -o allure-report'
        //             } catch (e) {
        //                 echo "Error generando el reporte de Allure, pero continuando con el pipeline."
        //             }
        //         }
        //     }
        // }

        // stage('Archive Allure Report') {
        //     steps {
        //         archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        //     }
        // }
    }
}

// Función para correr las pruebas de Cypress y stashear los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        
        // Agregar la cache para node_modules
        
            cache(path: 'node_modules', key: 'npm-cache') {
                sh 'npm ci' // Usa 'npm ci' para instalaciones más rápidas
            }
        }
        try {
            // Ejecutar las pruebas de Cypress
            def exitCode = bat(script: 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true', returnStatus: true)

            // Comprobar el código de salida
            if (exitCode != 0) {
                currentBuild.result = 'UNSTABLE'
                echo "Cypress test falló con código de salida: ${exitCode}"
            } else {
                echo "Cypress test completado exitosamente."
            }

            // Stashear los resultados de Allure si existen
           // stash includes: '**/allure-results/**', name: allureStashName

        } catch (e) {
            echo "Error durante la ejecución de Cypress: ${e.message}"
            currentBuild.result = 'UNSTABLE'
        }
    }
}
