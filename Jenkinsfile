pipeline {
    agent any


    environment {
        DOCKER_IMAGE     = 'theghost007/static-reactjs-demo'
        DOCKER_TAG       = "${BUILD_NUMBER}"
        CONTAINER_NAME   = 'static-react-app-container'
        HOST_PORT        = '7000'  
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

        stage('Add Domain') {
            steps {
                sh '''
                    echo "Adding domain to the container..."

                    sudo tee /etc/nginx/sites-available/static-react-app > /dev/null <<'EOF'
server {
    listen 80;
    server_name vmmi.duckdns.org;

    location / {
        proxy_pass http://localhost:7000;

        # Preserve original host and client info
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Required for Jenkins (fix reverse proxy issues)
        proxy_set_header X-Forwarded-Port $server_port;

        # Disable buffering (important for console logs / streaming)
        proxy_buffering off;

        # Increase timeout for long builds
        proxy_read_timeout 3600;
        proxy_send_timeout 3600;

        # WebSocket support (VERY IMPORTANT)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Prevent caching issues
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

                    sudo ln -sf /etc/nginx/sites-available/static-react-app /etc/nginx/sites-enabled/static-react-app
                    sudo nginx -t
                    sudo systemctl reload nginx

                    echo "Nginx configuration completed."

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