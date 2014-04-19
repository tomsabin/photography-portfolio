photography-portfolio
=====================

tomsabin.co.uk - photography portfolio

### Starting the server with a defined MongoDB

1) Start MongoDB

`mongod --dbpath=<path>`

2) Start Meteor

`MONGO_URL="mongodb://127.0.0.1:27017/<database-name>" meteor run --port 3000`

3) Go to `http://localhost:3000`

### Compiling SASS with Compass

Using [Bourbon Neat](http://neat.bourbon.io/) for grid framework, [SASS](http://sass-lang.com/) for le CSS and [Compass](http://compass-style.org/) to compile it all. Phew.

1) Ensure that `sass, `bourbon`, `neat` and `compass` are installed

`gem install sass`
`gem install bourbon`
`gem install neat`
`gem install compass`

2) Then `cd` to the root of the project and run `compass compile`