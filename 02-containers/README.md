Containers
==========
Containers provide process ioslation and resource management using cgroups and namespaces ( linux magic unicorns ). The anology of shipping containers is often used to describe
their common use case in development circles. Everything you need to run your application goes into a container, and you ship
the container.

With Docker, a container is created from an image( *template* ) using the `run` command, similar to using an ISO to create
a new computer environment. The environment inside the container only knows what you tell it ( not so magical after all ). 

