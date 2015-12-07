Packaging Applications
----------------------

The primary use case for containers in development circles is to package up and application and it's execution environment. 
This provide a single deployable unit the is known to run with out problems, as there is no installation or OS configuration
that needs to happen. We just ship and run containers

### Assignment

* Update the Docker file to package up the app in this directory into a new image
* Start three instances of the new image in the background
* Use curl on your machine to interact with the app running in your containers
* stop and destroy each containers

### TIPS
1. Use the `ADD` and `WORKDIR` directive to add the current directory into the container
2. Be sure to install any OS and application dependancies
3. Set the environment Variable `DEBUG` to `*`
4. logs can be helpful for debugging