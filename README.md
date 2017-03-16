# 1. Build it #
Use docker-compose build to build the images composed in the docker-compose.yml.

```
#!shell
docker-compose build
```

Use `--force-rm` to always remove intermediate containers.



# 2. Up & run #
Use docker-compose up to get it up and running.

```
#!shell
docker-compose up --abort-on-container-exit
```

You could either use the following command to build and run in one step.
```
#!shell
docker-compose up --build --abort-on-container-exit
```