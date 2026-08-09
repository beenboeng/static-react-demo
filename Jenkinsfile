pipeline {
    agent any


    environment {
        DOCKER_IMAGE     = 'theghost007/static-reactjs-demo'
        DOCKER_TAG       = "${BUILD_NUMBER}"
        CONTAINER_NAME   = 'static-react-app-container'
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
                    echo "Testing React application..."

                    docker run --rm \
                        -v "$WORKSPACE:/app" \
                        -w /app \
                        oven/bun:1 \
                        bun install --frozen-lockfile

                    docker run --rm \
                        -v "$WORKSPACE:/app" \
                        -w /app \
                        oven/bun:1 \
                        bun run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t "${DOCKER_IMAGE}:latest" .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'DH_CREDIT',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" --password-stdin

                        docker push "${DOCKER_IMAGE}:latest"
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying ${DOCKER_IMAGE}:${DOCKER_TAG} ..."
                  
                    docker stop ${CONTAINER_NAME} || true 
                    docker rm ${CONTAINER_NAME} || true 

                    docker run -dp ${HOST_PORT}:${CONTAINER_PORT} --name ${CONTAINER_NAME} "${DOCKER_IMAGE}:latest"

                '''
            }
        }

        stage('Add domain') {
            steps {
                sh '''
                    echo "Adding domain to the container..."
                '''

            }
        }

        stage('Add SSL') {
            steps {
                sh '''
                    echo "Adding SSL to the container..."
                '''
            }
        }
    }
}