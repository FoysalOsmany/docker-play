# Docker Basics

## Docker Image
    1. docker images
    2. docker image rm
    3. docker rmi [id]

### Docker Build
    1. docker build -t [image name] [image path]
    1. docker build -t linux-play docker/linux-play
    2. docker build -t node-play docker/node-play
    3.

### Docker Container
    1. docker container ls
    1. docker container ls -a
    2. docker container stop [id]
    2. docker container rm [id]
    3. docker rm [id]
    1. docker run --name [container name] -p [host port]:[docker app port] -d [image name]
    1. docker run --name node-play-container -p 3333:3000 -d node-play


### Docker Process
    1. docker ps

### Docker Network
    1. docker inspect [container name]
    2. docker inspect node-play-container

### Docker Shell
    1. docker exec -it [container name] shell
    1. docker exec -it node-play-container shell

### Docker Logs
    1. docker logs node-play-container
    2. docker logs node-play-container -f

## Docker Compose
    1. docker-compose -f ./docker/app-play/docker-compose.yml up -d
    1. docker-compose -f [file location] up -d --force-recreate
    2. docker-compose ps
    3. docker-compose up
    4. docker-compose down
