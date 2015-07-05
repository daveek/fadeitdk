diff --git a/specs/sofas.spec.coffee b/specs/sofas.spec.coffee
index efbff58..93e7bd2 100644
--- a/specs/sofas.spec.coffee
+++ b/specs/sofas.spec.coffee
@@ -9,12 +9,17 @@ app = null
 describe 'Sofas API', ->
 
   beforeEach (done) ->
-    # Reset database and start express server before each test
-    dal = new DAL(process.env.COUCH_PORT, process.env.DATABASE)
-    dal.resetDatabase(true)
-      .then ->
-        app = server.listen done
-      .fail (err) -> done err
+
+    if process.env.NODE_ENV is 'test-int'
+      # Reset database and start express server before each test
+      dal = new DAL(process.env.COUCH_PORT, process.env.DATABASE)
+      dal.resetDatabase(true)
+        .then ->
+          app = server.listen done
+        .fail (err) -> done err
+    else
+      app = server.listen done
+
 
   # Close express server after each test
   afterEach (done) ->
