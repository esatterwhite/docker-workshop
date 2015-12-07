Links
-----
Links provide a simple way to work around the short comings of networking with docker containers.
When one container is linked into another, the target container is populated with a number of environment
variables that describe the original container. An entry is also added to the hosts file in the target container
allowing the origin container to be referenced by name.

Links are created using the `--link` flag passing it the name of the origin container and the name to bind to
inside the target container - separated by a colon ( `:` ).

```sh
docker run --link ORIGIN_NAME:TARGET_NAME image
```

### Assignment 1

* update your application to connect to a redis host and store data redis
* run a new instance of your application container with a redis container linked to it

#### TIPS
1. The `run` command accepts a `--name` flag allowing you to name each container. 

Volumes
-------
A Volume is a way to expose a directory similar to the way a port is exposed. A Volumne is exposed using the
`VOLUME` directive in a docker file. You can map ( mount ) a directory from inside a container to a directory on the host machine.
All file placed in the directory will be available both in the container and on the host machine.

This can be very helpful for configuration, data files from databases / backups, exporting build artifacts or tests, etc.

### Assignment 2

* Update your appliation image to expose a volume at `/etc/config`
* Update `index.js` to read a JSON file from the volume directory and dynamically change cut off of the counter using a config option
* Run an instance of your application container
* Use curl on your machine to interact with the application
  
### TIPS
* `logs` will show you any output before the container crashed
* If logs doesn't help, start it with /bin/sh instead of the default command
