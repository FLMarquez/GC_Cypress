pipeline {
    agent any // Utiliza cualquier nodo disponible para ejecutar el pipeline
    stages {
        stage('Run PDF.bat') {
            steps {
                script {
                    // Ejecuta el script para descargar PDFs
                    bat 'C:\\home\\workspace\\DescargaPDF-ATPRIMARIA\\PDF.bat'
                }
            }
        }
        stage('Run test_cmd_telegram_allure.bat') {
            steps {
                script {
                    // Ejecuta el script para Telegram y Allure
                    bat 'C:\\home\\workspace\\Test_Allure_Telegram\\test_cmd_telegram_allure.bat'
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
