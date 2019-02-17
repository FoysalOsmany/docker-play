# Docker Basics

## Docker Image
    * docker images
    * docker image rm
    * docker rmi [id]

### Docker Build
    * docker build -t [image name] [image path]
    * docker build -t linux-play docker/linux-play
    * docker build -t node-play docker/node-play


### Docker Container
    * docker container ls
    * docker container ls -a
    * docker container stop [id]
    * docker container rm [id]
    * docker rm [id]
    * docker run --name [container name] -p [host port]:[docker app port] -d [image name]
    * docker run --name node-play-container -p 3333:3000 -d node-play


### Docker Process
    * docker ps

### Docker Network
    * docker inspect [container name]
    * docker inspect node-play-container

### Docker Shell
    * docker exec -it [container name] shell
    * docker exec -it node-play-container /bin/sh

### Docker Logs
    * docker logs node-play-container
    * docker logs node-play-container -f

## Docker Compose
    * docker-compose -f ./docker/app-play/docker-compose.yml up -d
    * docker-compose -f [file location] up -d --force-recreate
    * docker-compose ps
    * docker-compose up
    * docker-compose down
