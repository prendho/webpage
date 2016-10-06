# prendho webpage

built using [ghost](https://ghost.org)

## setting up

```
$ npm install -g gulp
$ npm install
```

### seeding DB

requirements: ruby 2+

```
$ bundle install --without staging production
$ ./seed.rb
```

## development

```
$ gulp
```

## Deployment

```
$ npm install -g pm2
$ ./deploy.bash production
```

## Quick Start Install

Make sure you've installed Node.js - We recommend the latest **Node v4 LTS** release. For other versions [click here](http://support.ghost.org/supported-node-versions/). May contain nuts.

1. Download the [latest release](https://ghost.org/developers/) of Ghost
1. Unzip in the location you want to install
1. Fire up a terminal
1. `npm install --production`
1. Start Ghost!
    - Local environment: `npm start`
    - On a server: `npm start --production`
1. `http://localhost:2368/ghost` :tada:
