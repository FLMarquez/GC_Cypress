pipeline {
    agent any

    tools { 
        nodejs "node" 
    }

    stages {
        // Etapa para actualizar la KB de GeneXus
        stage('Update Knowledge Base') {
            steps {
                script {
                    echo "Actualizando KB de GeneXus..."
                    bat 'gxupdate /kb="C:\\Models\\SGTFARO17U5" /user="admin" /password="Desa.cba45"'
                }
            }
        }

        // Etapa para construir la KB de GeneXus
        stage('Build Knowledge Base') {
            steps {
                script {
                    echo "Realizando build de la KB de GeneXus..."
                    bat 'gxbuild /kb="C:\\Models\\SGTFARO17U5" /user="admin" /password="Desa.cba45"'
                }
            }
        }

        // Verificación de cambios en la KB
        stage('Check for Changes') {
            steps {
                script {
                    // Ejecutar un comando git diff para ver si existen cambios en la KB
                    def changesExist = bat(script: 'git diff --quiet || echo "changes detected"', returnStatus: true) == 0 ? false : true
                    if (changesExist) {
                        echo "Cambios detectados en la KB, ejecutando pruebas..."
                    } else {
                        echo "No hay cambios en la KB. Las pruebas no se ejecutarán."
                        currentBuild.result = 'NOT_BUILT'
                        error("No se ejecutarán pruebas porque no hay cambios en la KB.")
                    }
                }
            }
        }

        // Ejecución en paralelo de las pruebas de Cypress en diferentes agentes solo si hay cambios
        stage('Cypress Parallel Test Suite') {
            when {
                expression { currentBuild.result != 'NOT_BUILT' }
            }
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

// CONFIGURACIÓN PARA QUE JENKINS ENVÍE CORREO INFORMANDO EL ESTADO DE LAS PRUEBAS REALIZADAS
//  post {
//         failure {
//             emailext(
//                 subject: "Build Failed in ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                 body: """<p>Hola,</p>
//                          <p>El build <b>#${env.BUILD_NUMBER}</b> de <b>${env.JOB_NAME}</b> ha fallado.</p>
//                          <p>Revisa los detalles en <a href="${env.BUILD_URL}">Jenkins</a>.</p>
//                          <p>Atentamente,<br>Jenkins</p>""",
//                 recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
//                 to: "tucorreo@tuempresa.com"
//             )
//         }

//         success {
//             emailext(
//                 subject: "Build Success in ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                 body: """<p>Hola,</p>
//                          <p>El build <b>#${env.BUILD_NUMBER}</b> de <b>${env.JOB_NAME}</b> ha completado con éxito.</p>
//                          <p>Puedes ver los detalles en <a href="${env.BUILD_URL}">Jenkins</a>.</p>
//                          <p>Atentamente,<br>Jenkins</p>""",
//                 recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
//                 to: "tucorreo@tuempresa.com"
//             )
//         }

//         always {
//             emailext(
//                 subject: "Build Result for ${env.JOB_NAME} #${env.BUILD_NUMBER}: ${currentBuild.currentResult}",
//                 body: """<p>Hola,</p>
//                          <p>El build <b>#${env.BUILD_NUMBER}</b> de <b>${env.JOB_NAME}</b> ha finalizado con el estado: <b>${currentBuild.currentResult}</b>.</p>
//                          <p>Revisa los detalles en <a href="${env.BUILD_URL}">Jenkins</a>.</p>
//                          <p>Atentamente,<br>Jenkins</p>""",
//                 recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
//                 to: "tucorreo@tuempresa.com"
//             )
//         }
//     }


// Función para correr las pruebas de Cypress y stashear los resultados de Allure
def runCypressTests(allureStashName) {
    script {
        git url: 'https://github.com/FLMarquez/GC_Cypress.git'
        //bat 'npm install'
        //bat 'npm ci' 
        try {
           def exitCode = bat(script: 'npx cypress run --record --key 53c9cb4d-fb97-4a4a-9dc6-9f74ea47dd16 --browser chrome --parallel --env allure=true --config-file cypress.config.js --headless', returnStatus: true)
            if (exitCode != 0) {
                currentBuild.result = 'UNSTABLE'
                echo "Cypress test falló con código de salida: ${exitCode}"
            } else {
                echo "Cypress test completado exitosamente."
            }
        } catch (e) {
            echo "Error durante la ejecución de Cypress: ${e.message}"
            currentBuild.result = 'UNSTABLE'
         } finally {
            // Copiar los archivos de Allure al directorio centralizado
            bat "xcopy /Y /S allure-results\\*.xml C:\\home\\workspace\\GC_Cypress_Pipeline\\allure-results\\"
        }
    }
}

