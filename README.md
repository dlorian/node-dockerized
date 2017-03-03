#1 Build it #
Use docker-compose build to build the images composed in the docker-compose.yml.

`docker-compose build`

Use `--force-rm` to always remove intermediate containers.

#1 Up & run #
Use docker-compose up to get it up and running.

up builds, (re)creates, starts, and attaches to containers for a service. The docker-compose up command aggregates the output of each container. When the command exits, all containers are stopped. Running `docker-compose up -d` starts the containers in the background and leaves them running.

`docker-compose up -d`
