express    = require 'express'

app = express()

app.get '/sofas', (req, res) ->
  throw new Error 'not implemented'

app.get '/sofas/:sofa', (req, res) ->
  throw new Error 'not implemented'


exports.listen = (callback) ->
  port = process.env.PORT
  app.listen port, callback
