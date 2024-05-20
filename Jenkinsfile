pipeline {
    agent any

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
                    sh 'npm test'
                }
            }
        }
    }
}

