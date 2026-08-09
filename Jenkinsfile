pipeline {
    agent any

    tools{
        nodejs 'nodejs-20'
    }

    environment {
        DOCKER_IMAGE     = 'theghost007/static-reactjs-demo'
        DOCKER_TAG       = "${BUILD_NUMBER}"
        CONTAINER_NAME   = 'react-app'
        HOST_PORT        = '3000'  
        CONTAINER_PORT   = '80'   
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                 git branch: 'main', url: 'https://github.com/beenboeng/static-react-demo.git'
            }
        }

        stage('Test') {
            steps {
                sh '''
                    echo "Testing..."
                    npm install
                    npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                        -t "${DOCKER_IMAGE}:${DOCKER_TAG}" \
                        -t "${DOCKER_IMAGE}:latest" \
                        .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" --password-stdin
                        docker push "${DOCKER_IMAGE}:${DOCKER_TAG}"
                        docker push "${DOCKER_IMAGE}:latest"
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying ${DOCKER_IMAGE}:${DOCKER_TAG} ..."
                    docker pull "${DOCKER_IMAGE}:latest"
                    docker stop "${CONTAINER_NAME}" || true
                    docker rm   "${CONTAINER_NAME}" || true
                    docker run -d \
                        --name "${CONTAINER_NAME}" \
                        --restart unless-stopped \
                        -p ${HOST_PORT}:${CONTAINER_PORT} \
                        "${DOCKER_IMAGE}:latest"
                '''
            }
        }
    }
}