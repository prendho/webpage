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
