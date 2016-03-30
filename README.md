<a href="http:fadeit.dk"><img src="http://fadeit.dk/src/assets/img/brand/fadeit_logo_full.svg" alt="The fadeit logo" style="width:200px;"/></a><br/><br/>
###fadeit.dk - website front-end source
<hr/>

The fadeit.dk website is built on top of [this AngularJS boilerplate](https://github.com/dandaniel/angular-boilerplate-study).

##Getting started

Install `npm` and `bower` dependencies and run `grunt`, that's it. You are good to go.

```
$ sudo npm install
$ bower install
$ grunt
```

After running grunt, the source files will be built into `./build`.

When the app is ready for production, compile the app into `./application` by running:

```
$ grunt compile
```

###Build
The build task will do all the work for development and create files in -> `./build`

```
$ grunt build
```
You can use the following command to start the build http server (port 8008 default):

```
$ grunt dev
```


###Compile
The compile task will do all the work for production and create files in -> `./application`

```
$ grunt compile
```
You can use the following command to start the build http server (port 8009 default):

```
$ grunt prod
```

===================
####About fadeit
We build awesome software, web and mobile applications.
See more at [fadeit.dk](http://fadeit.dk)
