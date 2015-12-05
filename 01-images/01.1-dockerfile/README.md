The most common way to build a docker image, is with the `Dockerfile`. The `Dockerfile` is used by docker by name, to specify the steps required to create the image. The most common directives found in a `Dockerfile` are:

`FROM`: The name & tag of an image to use as the starting point for the image being built. If that image does not exist on disk, docker will download it for you

`RUN`: executes a shell command of your choosing inside of the image as it is being build

`ADD`: Adds content to the container at a specified location. Can be a `directory`, `file`, `tarball` or `url`

`COPY`: Copies directories and file to a specified location. Lighter and less magical than `ADD`.

`ENV`: Specifies a default environment variable

`CMD`: The default command to be run when a container starts

`ENTRYPOINT': allows you to configure a container that will run as an executable. This is always the first thing run when a container starts

`VOLUME`: a directory in the container that can be exposed outside of the container

`EXPOSE`: exposes port number for use outside of the container
