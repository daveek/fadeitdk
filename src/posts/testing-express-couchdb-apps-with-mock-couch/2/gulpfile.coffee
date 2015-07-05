require 'coffee-script/register'

gulp    = require 'gulp'
mocha   = require 'gulp-mocha'

sources =
  tests: './specs/**/*.spec.coffee'

# Task to run tests with mock-couch backend
gulp.task 'test', ->
  process.env.NODE_ENV = 'test'
  process.env.PORT = 3010
  process.env.COUCH_PORT = 5987
  process.env.DATABASE = 'sofas_test'
  gulp.src(sources.tests)
    .pipe(mocha())

# Task to run integration tests (real CouchDB backend)
gulp.task 'test-int', ->
  process.env.NODE_ENV = 'test'
  process.env.PORT = 3010
  process.env.COUCH_PORT = 5984
  process.env.DATABASE = 'sofas_test'
  gulp.src(sources.tests)
    .pipe(mocha())

# Task to run our server
gulp.task 'default', ->
  process.env.NODE_ENV = 'development'
  process.env.PORT = 3000
  process.env.COUCH_PORT = 5984
  process.env.DATABASE = 'sofas'

  server = require './server'
  server.listen()

# Task to run our server
gulp.task 'db', ->
  process.env.NODE_ENV = 'development'
  process.env.PORT = 3000
  process.env.COUCH_PORT = 5984
  process.env.DATABASE = 'sofas'
  DAL = require './dal'
  dal = new DAL(5984, 'sofas')
  dal.resetDatabase(true)
    .then (res) -> console.log 'success'
    .fail (err) -> console.log err

