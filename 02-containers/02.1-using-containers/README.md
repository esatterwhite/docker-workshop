Using Containers
----------------

Once you have a container running, there are a couple simple commands you can use to interact with it.


| Command | Description | Example |
|---------|-------------|---------|
| `attach` | Attach a container to your current terminal session | `docker attach 258b5` |
| `logs`   | Show the logs ( stdout ) from a container | `docker logs abacd` |
| `exec`   | attach to a container and execute a command | `docker exec 258b5 /bin/bash` |
| `stop`   | stops a running container | `docker start abacd` |
| `start`  | starts a previously stopped container | `docker start 258b5` |
| `restart` | Stops and starts an existing container | `docker restart 258b5` |
| `rm`     | destroy ( remove ) a currently stopped container | `docker rm 258b5` |
| `ps`     | lists any running containers | `docker ps` |

### Assignment

* Build an image from the Docker file in this directory
* Start a container in the background from that image.
* Tail the logs using the `logs` command.
* start a new shell session in the running container.
* Destroy all previously started containers

### Tips
* ps accepts a `-a` flag that will show all containers, running or not
* logs takes a `-f` flag that will constantly tail the container output
* exec takes a `-t` and `-i` which starts the command in an interactive tty session, giving you control and preventing the container from exiting
* use `docker run --help` to find a flag to run a container in the background
* Stoping a container does not destroy it. All configuration, history, and data in the container will persist until it is destroyed
