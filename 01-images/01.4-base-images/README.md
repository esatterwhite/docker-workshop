Its common practice to create a base image that includes common and shared dependancies, scripts, etc.
Leaving application specific setup and for a smaller more simple Docker file.

### Assignment 

1. Create a base image that has the package `tree` installed
2. From that base image that executes the tree command on a directory specified by an Environment variable
