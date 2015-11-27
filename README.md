# About BrewControlClient

This software brews beer. Well, it is the client for the [BrewControlServer][BrewControlServer] that controls the mashing process.
This is a single page web application based on AngularJS. In this repository, you will find the client that consumes all necessary rest services to control the mashing process.

# Installation

**Note**: You need to have a [BrewControlServer][BrewControlServer] up and running.

## 0. The simple solution
You don't need to install the client, you can just start it here (if you have web access):
[http://sebigo.github.io/BrewControlClient/www/][brewcontrol]

This works for any device that has a browser. Make sure you supply a correct server connection string.

## 1. Run locally on a Raspberry Pi
You can download the client to the same Raspberry Pi that your [BrewControlServer][BrewControlServer] runs on. 
```
sudo apt-get update
sudo apt-get install lighttpd # install web server

cd /var/www
sudo wget http://sebigo.github.io/BrewControlClient/BrewControlClient.tar.gz
sudo tar -xzf BrewControlClient.tar.gz 
```
Now fire up a browser on your Raspberry Pi and go to [http://localhost/][localurl]. If you access from a remote browser, use the IP or hostname of your Raspberry Pi.

## 2. Compile the project
This project is based on the [AngularJS seed template][angular-seed]. You need to have npm and bower installed. 
Clone and install the project:
```
git clone git@github.com:SebiGo/BrewControlClient.git
cd BrewControlClient
npm install
```
If you want to run this on a web server, copy the folder www to your web server. You can also start serving the page using: 
```
npm start
```

## 2. Cordova (optional)
If you want to run this on your mobile phone with Apache Cordova you need to install cordova first.
```
sudo npm install -g cordova
```

Plug in your phone and, if you have an android device, execute: 
```
cordova platform add android
cordova run android
```

Note: You have to set your phone to developer mode.

# Contact, Support, Bugs, Feature requests
Please use [GitHub Issues][issues] for bugs and feature requests.

[issues]: https://github.com/SebiGo/BrewControlClient/issues
[angular-seed]: https://github.com/angular/angular-seed
[brewcontrol]: http://sebigo.github.io/BrewControlClient/www/
[BrewControlServer]: https://github.com/SebiGo/BrewControlServer
[localurl]: http://localhost/

# Continuous integration and code coverage 
CodeClimate: [![Code Climate](https://codeclimate.com/github/SebiGo/BrewControlClient/badges/gpa.svg)](https://codeclimate.com/github/SebiGo/BrewControlClient) [![Test Coverage](https://codeclimate.com/github/SebiGo/BrewControlClient/badges/coverage.svg)](https://codeclimate.com/github/SebiGo/BrewControlClient/coverage)
