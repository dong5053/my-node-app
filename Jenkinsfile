pipeline {
    agent any

    tools {
       nodejs 'nodejs-21.6.2'
    }
    
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building......'
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    echo '하하하하핳'
                    sh 'npm test'
                }
            }
        }
    }
}

