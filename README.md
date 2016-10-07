# prendho webpage

built using [ghost](https://ghost.org)

## setting up

```
$ npm install -g gulp
$ npm install
```

### seeding DB

requirements:
- ruby 2+
  ```
$ ruby -v
ruby 2.3.0p0 (2015-12-25 revision 53290) [x86_64-darwin15]
  ```
- bundler
  ```
$ gem list bundler
*** LOCAL GEMS ***
bundler (1.13.0)
  ```

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
