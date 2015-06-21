#!/bin/bash

# this script deploys the client to my web server. You need to know the password to do this :)
rsync -avz --del www/* brewcontrol@goodrick.ch:~
