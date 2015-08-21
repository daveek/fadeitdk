diff --git a/specs/sofas.spec.coffee b/specs/sofas.spec.coffee
index 8c1eb84..efbff58 100644
--- a/specs/sofas.spec.coffee
+++ b/specs/sofas.spec.coffee
@@ -1,13 +1,54 @@
-should = require 'should'
+should  = require 'should'
+DAL     = require '../dal'
+request = require 'supertest'
+request = request "http://localhost:#{process.env.PORT}"
+server  = require '../server'
+
+app = null
 
 describe 'Sofas API', ->
 
+  beforeEach (done) ->
+    # Reset database and start express server before each test
+    dal = new DAL(process.env.COUCH_PORT, process.env.DATABASE)
+    dal.resetDatabase(true)
+      .then ->
+        app = server.listen done
+      .fail (err) -> done err
+
+  # Close express server after each test
+  afterEach (done) ->
+    app.close done
+
+
   describe '/sofas', ->
-    it 'should return all sofas with GET', ->
-      # TODO: write test
-      (false).should.be.true()
+    it 'should return all sofas with GET', (done) ->
+      request
+        .get '/sofas'
+        .expect 200
+        .expect (res) ->
+          sofas = res.body
+          sofas.should.have.length(3)
+          for s in sofas
+            s.should.have.property('_id')
+            s.should.have.property('_rev')
+            s.should.have.property('name')
+            s.should.have.property('price')
+
+        .end done
+          
+
 
   describe '/sofas/:sofa', ->
-    it 'should return a particular sofa with GET', ->
-      # TODO: write test
-      (false).should.be.true()
+    it 'should return a particular sofa with GET', (done) ->
+      request
+        .get '/sofas/sofa1'
+        .expect 200
+        .expect (res) ->
+          sofa = res.body
+          sofa.should.have.property('_id')
+          sofa.should.have.property('_rev')
+          sofa.should.have.property('name')
+          sofa.should.have.property('price')
+
+        .end done
