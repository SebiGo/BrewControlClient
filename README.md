# BrewControlClient
This is the BrewControl client. It is a single page application based on AngularUI. 

# What does this software do?
This software brews beer. Well, it is the client for the [BrewControlServer][BrewControlServer] that controls the mashing process.
In this repository, you will find the client, that consumes all necessary rest services to control the mashing process.

# Installation

## 0. The simple solution
You don't need to install the client, you can just start it here (if you have web access):
[http://sebastiangoodrick.github.io/BrewControlClient/www/][brewcontrol]
This works for any device that has a browser. Make sure you supply a correct server connection string.

**Please note**: You need to have a [BrewControlServer][BrewControlServer] up and running.

## 1. Compile project
This project is based on the [AngularJS seed template][angular-seed]. You need to have npm and bower installed. 
To clone and install the project:
```
git clone git@github.com:SebastianGoodrick/BrewControlClient.git
cd BrewControlClient
npm install
```
If you want to run this on a web server, copy the folder www to your web server. You can also start serving the page with 
```
npm start
```

## 2. Cordova (optional)
If you want to run this on your mobile phone with Apache Cordova you need to install cordova first: 
```
sudo npm install -g cordova
```

Plug in your phone and for android do a 
```
cordova platform add android
cordova run android
```

Please note, you have to set your phone to developer mode.

# Contact, Support, Bugs, Feature requests
Please use [GitHub Issues][issues] for bugs and feature requests.

[issues]: https://github.com/SebastianGoodrick/BrewControlClient/issues
[angular-seed]: https://github.com/angular/angular-seed
[brewcontrol]: http://sebastiangoodrick.github.io/BrewControlClient/www/
[BrewControlServer]: https://github.com/SebastianGoodrick/BrewControlServer
