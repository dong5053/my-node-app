pipeline {
    agent any

    tools {
       nodejs 'nodejs-21.6.2'
    }
    
    environment {
        DOCKER_TOOL_NAME = 'docker-26.0.0'
        DOCKER_IMAGE = 'danma5053/testweb'
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
                    sh 'npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_ID}").push()
                    }
                }
            }
        }
        stage('deploy') { 
            steps { 
                script { 
                    withKubeConfig([credentialsId: 'k8s-jenkins-token', serverUrl: 'https://10.0.0.3', namespace: 'default']) {
                        container('kubectl') {
                            sh 'kubectl apply -f deploy.yaml'
                        }
                    }
                }
            }
        }
    }
}
