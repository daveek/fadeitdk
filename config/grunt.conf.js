module.exports = {
  /*
   * Global configuration.
   * These values are used in 'gruntfile.js', usually for globbing
   * patterns. I.e. <%= build_dir %>
   *
   */
  source_dir: './src/',
  build_dir: './build/',
  compile_dir: './application/',
  /*
   * Build configuration.
   * The build object below loads the scripts in the provided order
   * and writes <script> tags in 'index.html'
   *
   * Build scripts should not be minified; this will make it easier
   * to debug as we'll see full exception messages in references to
   * specific line numbers.
   *
   * The CSS files defined here will be concatenated and minified,
   * together with the stylesheets present in '/assets'.
   * 'vendor_css' + 'src/assets' -> build/src/assets/app.min.css
   *
   */
  build: {
    vendor_js: [
      //written in 'index.html' in this order
      './vendor/wow/dist/wow.js',
      './vendor/jquery/dist/jquery.js',
      './vendor/angular/angular.js',
      './vendor/angular-ui-router/release/angular-ui-router.js',
      './vendor/angular-mocks/angular-mocks.js',
      './vendor/angular-load/angular-load.js',
      './vendor/angular-scroll/angular-scroll.js',
      './vendor/fingerprint/fingerprint.js',
      './vendor/angular-translate/angular-translate.js',
      './vendor/angular-sanitize/angular-sanitize.js',
      './vendor/angulike/angulike.js',
      './vendor/a0-angular-storage/dist/angular-storage.js',
      './vendor/hamsterjs/hamster.js',
      './vendor/angular-mousewheel/mousewheel.js',
      './vendor/angular-animate/angular-animate.js',
      './vendor/angular-messages/angular-messages.js'
    ],
    vendor_css: [
      //concatenated with 'assets' stylesheets in 'app.min.css'
      './vendor/bootstrap-fadeit/dist/css/bootstrap.min.css',
      './vendor/font-awesome/css/font-awesome.min.css',
      './vendor/animate.css/animate.min.css'
    ]
  },
  /*
   * Compile configuration.
   * The compile object is similar to the build one, except it
   * contains two Arrays: one for minified scripts and one for
   * unminified ones.
   * The reason for this is that usually (but not always), Bower
   * dependencies also have a minified version of a component,
   * therefore there is no reason for us to minify it again.
   *
   */
  compile: {
    vendor_min_js: [
      //won't minify again
      './vendor/wow/dist/wow.min.js',
      './vendor/jquery/dist/jquery.min.js',
      './vendor/angular/angular.min.js',
      './vendor/angular-ui-router/release/angular-ui-router.min.js',
      './vendor/angular-load/angular-load.min.js',
      './vendor/angular-scroll/angular-scroll.min.js',
      './vendor/angular-translate/angular-translate.min.js',
      './vendor/angular-sanitize/angular-sanitize.min.js',
      './vendor/a0-angular-storage/dist/angular-storage.min.js',
      './vendor/angular-animate/angular-animate.min.js',
      './vendor/angular-messages/angular-messages.min.js'
    ],
    vendor_js: [
      //doesn't have a min files, will minify
      './vendor/fingerprint/fingerprint.js',
      './vendor/angulike/angulike.js',
      './vendor/hamsterjs/hamster.js',
      './vendor/angular-mousewheel/mousewheel.js'
    ]
  },
  /*
   * Common configuration.
   * Common resources are vendor (third party) assets that have to
   * be included in the project source and are not JavaScript or
   * CSS files.
   *
   * The common object contains only fonts, but might as well
   * contain other assets.
   * (Note: if there are other types of assets, then the grunfile.
   * js needs to be updated accordingly; there is no task set up
   * for other common resources)
   *
   * Setting up a new common resource should be done by following
   * the fonts implementation in the copy task:
   *
   * copy: {
   * ............................................................
   *   build_resource: {
   *     src: ['<%= common.vendor_resource %>'],
   *     dest: '<%= build_dir %>src/assets/resource-type/',
   *     expand: true,
   *     flatten: true,
   *     filter: 'isFile'
   *   },
   * ............................................................
   * }
   *
   * The task should also be added in the 'build' task:
   *
   * grunt.registerTask('build', [
   * ............................................................
   *   'copy:build_resource',
   * ............................................................
   *
   */
  common: {
    vendor_fonts: [
      './vendor/bootstrap-fadeit/dist/fonts/**/*',
      './vendor/font-awesome/fonts/**/*'
    ]
  },
  /*
   * The module file order Array.
   * As the name suggests, this object is used to dictate a
   * certain module file order.
   *
   * The order of AngularJS modules is important because the app
   * might be easily be broken if a Controller is defined before
   * the module that contains it.
   *
   */
  module_file_order: [
    //Init files contain global configuration
    '**/*.init.js',
    //Config files are used to define module dependecies on the root module after application bootstrap (using the 'pushAfterBootstrap' method). The config files also contain the module config block (angular.module('name').config()) and the constant blocks (angular.module('name').constant()).
    '**/*.config.js',
    '**/*.translations.js',
    //Run blocks are used to execute code after the injector is created and are used to kickstart the application
    '**/*.run.js',
    //Services represent angular services, but also can also be a factory, provider or value. The rule of thumb is to always use 'file.service.js' for any of these components.
    '**/*.service.js',
    '**/*.factory.js',
    '**/*.provider.js',
    '**/*.value.js',
    //After services come controllers and finally directives and filters
    '**/*.controller.js',
    '**/*.directive.js',
    '**/*.filter.js'
  ]
};
