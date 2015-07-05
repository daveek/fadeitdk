diff --git a/gulpfile.coffee b/gulpfile.coffee
index cbd61b5..1200834 100644
--- a/gulpfile.coffee
+++ b/gulpfile.coffee
@@ -6,14 +6,48 @@ mocha   = require 'gulp-mocha'
 sources =
   tests: './specs/**/*.spec.coffee'
 
+
 # Task to run tests with mock-couch backend
 gulp.task 'test', ->
   process.env.NODE_ENV = 'test'
   process.env.PORT = 3010
   process.env.COUCH_PORT = 5987
   process.env.DATABASE = 'sofas_test'
-  gulp.src(sources.tests)
-    .pipe(mocha())
+
+  fork = require('child_process').fork
+  couchProcess = fork('node_modules/gulp/bin/gulp.js', ['mock-couch'], {cwd: __dirname})
+  couchProcess.on 'message', (msg) =>
+    if msg is 'listening'
+      gulp.src(sources.tests)
+        .pipe(mocha())
+        .once('error', (err) ->
+          process.exit(1)
+        )
+        .once('end', ->
+          process.exit()
+        )
+
+  process.on 'exit', ->
+    couchProcess.kill()
+
+gulp.task 'mock-couch', ->
+  process.env.NODE_ENV = 'test'
+  process.env.PORT = 3010
+  process.env.COUCH_PORT = 5987
+  process.env.DATABASE = 'sofas_test'
+
+  mockCouch = require 'mock-couch'
+  couchdb = mockCouch.createServer()
+  DAL = require './dal'
+  dal = new DAL(process.env.COUCH_PORT, process.env.DATABASE)
+  docs = [dal._sofaViews]
+  docs = docs.concat dal._sofaSamples
+
+  couchdb.addDB process.env.DATABASE, docs
+
+  couchdb.listen process.env.COUCH_PORT, ->
+    process.send 'listening'
+
 
 # Task to run integration tests (real CouchDB backend)
 gulp.task 'test-int', ->
