---
title: How to execute command with wildcard(*) in Golang?
date: 2022-12-15T21:47
author: larry xue
url: https://github.com/larry-xue
tags: 
  - golang 
  - os/exec
---

## Solution

To execute a command with a wildcard in Go, you can use the exec.Command function from the os/exec package. This function takes a command and any arguments as input and returns a *Cmd object that can be used to execute the command.

Here is an example of how you might use the exec.Command function to execute a command with a wildcard:

```go
package main

import (
    "fmt"
    "os/exec"
)

func main() {
    cmd := exec.Command("ls", "/var/*") // this line will be translated to ls '/var/*', but we want: ls /var/*
    cmd := exec.Command("/bin/sh", "-c", "ls /var/*")
    out, err := cmd.Output()
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(out))
}

```

## Why /bin/sh -c works?

In Unix-like operating systems, /bin/sh is the default command interpreter or shell. The -c flag is used to run a command specified as a string following the flag. So, our command will not be translated.