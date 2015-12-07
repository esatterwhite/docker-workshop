The most common way to build a docker image, is with the `Dockerfile`. The `Dockerfile` is used by docker by name, to specify the steps required to create the image. The most common directives found in a `Dockerfile` are:

| Deirective    | Description   | Example |
| ------------- |:-------------:|:--------|
| `FROM`        | The name & tag of an image to use as the starting point for the image being built. If that image does not exist on disk, docker will download it for you | `FROM debiam:jessie` |
| `RUN`         | executes a shell command of your choosing inside of the image as it is being build | `RUN /bin/bash -c "echo 'HELLO WORLD'"` |
| `ADD`         | Adds content to the container at a specified location. Can be a `directory`, `file`, `tarball` or `url` | `ADD ./src /opt/src` |
| `COPY`        | Copies directories and file to a specified location. Lighter and less magical than `ADD`. | `COPY ./src /opt/src` |
| `ENV`         | Specifies a default environment variable | `ENVIRONMENT=production` |
| `CMD`         | The default command to be run when a container starts | `CMD ["npm", "start"]` |
| `ENTRYPOINT'  | allows you to configure a container that will run as an executable. This is always the first thing run when a container starts | `ENTRYPONT ["/usr/bin/run.sh"]` |
| `VOLUME`      | a directory in the container that can be exposed outside of the container | `VOLUME ["/etc/config"]` |
| `EXPOSE`      | exposes port number for use outside of the container | `EXPOSE 3000 8000 6543` |

### Building From Dockerfiles

The **docker** command `build` will look for a file called `Dockerfile` in the specified location. Use the `-t` flag to name your image

```sh
docker build -t workshop:01.1 $PWD
```

### Assignment
Create an image using any base OS, and create a container that starts a bash prompt

### TIPS: 
* you can use the flags `-ti` to keep the container in the foreground with an interactive tty
* The docs for all things Dockerfile can be found at (http://docs.docker.com/engine/reference/builder/)[http://docs.docker.com/engine/reference/builder/]