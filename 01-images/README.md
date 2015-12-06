A docker **image** can be thought of as template for creating working containers similar to ISO Disc images for creating working computers. You can use prebuilt images using the simple `docker pull` command, or you can build your own with the `docker build` command.

Images can found on the [docker registry](https://registry.docker.com).

### Pull pull an image
```
docker pull hello-world:latest
```

### Create and run a container
```
docker run hello-world:latest
```

### Pull a redis image
```
docker pull redis
```

### Run redis in the background
docker run -d redis
