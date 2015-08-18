diff --git a/server.coffee b/server.coffee
index 98f1918..a0d30ce 100644
--- a/server.coffee
+++ b/server.coffee
@@ -1,16 +1,27 @@
 express    = require 'express'
+DAL        = require './dal'
 
+dal = new DAL(process.env.COUCH_PORT, process.env.DATABASE)
 app = express()
 
 app.get '/sofas', (req, res) ->
-  throw new Error 'not implemented'
+  dal.getSofas()
+    .then (sofas) ->
+      res.json(sofas)
+    .fail (err) -> res.status(err.statusCode).send()
 
 app.get '/sofas/:sofa', (req, res) ->
-  throw new Error 'not implemented'
+  dal.getSofas(req.params.sofa)
+    .then (sofas) ->
+      if sofas.length isnt 1
+        res.status(404).send()
+      else
+        res.json(sofas[0])
+    .fail (err) -> res.status(err.statusCode).send()
 
 
 exports.listen = (callback) ->
