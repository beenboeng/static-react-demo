pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'theghost007/static-reactjs-demo'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh '''
                    bun install --frozen-lockfile
                    bun test
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                        -t ${DOCKER_IMAGE}:${DOCKER_TAG} \
                        -t ${DOCKER_IMAGE}:latest \
                        .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" \
                            --password-stdin

                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying Docker image to the server..."
                    // docker pull ${DOCKER_IMAGE}:latest

                    // docker stop react-app || true
                    // docker rm react-app || true

                    // docker run -d \
                    //     --name react-app \
                    //     -p 8080:8080 \
                    //     ${DOCKER_IMAGE}:latest
                '''
            }
        }

        stage('Add Domain') {
            steps {
                sh '''
                    echo "Adding domain to the server..."
                '''
            }
        }

        stage('Add SSL') {
            steps {
                sh '''
                    echo "Adding SSL to the server..."
                '''
            }
        }
    }
}