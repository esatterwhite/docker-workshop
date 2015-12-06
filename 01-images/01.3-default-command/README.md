The Default Command
===================

In most situations YOu will want to specify some kind of default behavior. The `CMD` directive of the Dockerfile is the place to do that.
YOu can specify any command with any number of arguments that the OS in the container supports.

The CMD directive takes two forms, an `exec` form and a `shell` form.

### Exec Form

THe exec form takes an array of string which *must* be double quoted. THe first position is the command, everything after that is treated as parameters.
The exec form of CMD is executed directly and does not start a subshell, and therefore no shell processing ( like variable subs ).
```
CMD ["/bin/bash" ,"-c", "ls"]
```

### Shell Form

The Shell form invokes your command using the `sh` comand, **NOT** `bash`.

```
CMD /bin/echo "Hello world" # actually does /bin/sh -c '/bin/echo "Hello world"' 
```


### Assignment
Create an image where the default command pings localhost 10 times and exits
