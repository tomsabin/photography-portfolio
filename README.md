photography-portfolio
=====================

[tomsabin.co.uk](http://tomsabin.co.uk) - photography portfolio

### Starting the server locally with a defined MongoDB

1) Start MongoDB

`mongod --dbpath=<path>`

2) Start Meteor

`MONGO_URL="mongodb://<host>:<port>/<database>" meteor run --port 3000`

3) Go to `http://localhost:3000`

---

### Dependencies and packages

- [flickr-fetch](https://github.com/tomsabin/flickr-fetch): Used to populate the database with photos from a given Flickr photoset ID.
- [iron-router](https://github.com/EventedMind/iron-router)
- [iron-router-progress](https://github.com/Multiply/iron-router-progress/)
- scss, bourbon, neat (see following section)

### Compiling SASS with Compass

Using [Bourbon Neat](http://neat.bourbon.io/) for grid framework, [SASS](http://sass-lang.com/) for le CSS and [Compass](http://compass-style.org/) to compile it all. Phew.

1) Ensure that `compass` is installed: `gem install compass`

2) Then `cd` to the root of the project and run `compass compile` or `compass watch`

### Deploying

1) Ensure `MONGO_URL`, `ROOT_URL` and `BUILDPACK_URL` are set when deploying for the first time:

- `heroku config:set MONGO_URL=mongodb://<username>:<password>@<host>:<port>/<database>`
- `heroku config:set ROOT_URL=<appname>.herokuapp.com` OR `heroku config:set ROOT_URL=http://<your-domain.com>`
- `heroku config:add BUILDPACK_URL=https://github.com/oortcloud/heroku-buildpack-meteorite.git`

2) Push latest changes to `master`

3) Push changes to heroku `git push heroku master`