Lesson 2
========

There are situations where using the default file named Dockerfile isn't possible, or where you may need more than one docker file.
For example, you may have a lot of dependancies required for the build process that are not required for the application container it self.
Docker's `build` command accepts a flag ( `-f` ) which allows you to specify the file to use as the docker file.

```sh
docker build -t workshop:01.2 -f Dockerfile.alternate $PWD
```

### Assignemnt

Build an image using each of the three docker files in this lesson( ubuntu, arch, alpine ). You may use the docker registry to find image names / tags

*hint*: the `run` command also accepts a command to run in a container
