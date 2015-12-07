Links
-----
Links provide a simple way to work around the short comings of networking with docker containers.
When one container is linked into another, the target container is populated with a number of environment
variables that describe the original container. An entry is also added to the hosts file in the target container
allowing the origin container to be referenced by name.

Links are created using the `--link` flag passing it the name of the origin container and the name to bind to
inside the target container - separated by a colon ( `:` ).

```sh
docker run --link ORIGIN:TARGET image
```

### Assignment 1

* update your application to connect to a redis host and store data redis
* run a new instance of your application container with a redis container linked to it

Volumes
-------


### Assignment 2

* Update your appliation image to expose a volume at `/etc/config'
* Run an instance of your application container reading a config file from your local computer
