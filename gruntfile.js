'use strict';

module.exports = function(grunt) {
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			clientViews: {
				files: ['modules/**/views/*.html'],
				options: {
					livereload: true,
				}
			},
			clientJS: {
				files: ['js/**/*.js', 'modules/**/*.js', 'src/*.js', 'config/*.js'],
				tasks: ['jshint', 'concat', 'uglify'],
				options: {
					livereload: true,
				}
			},
			clientCSS: {
				files: ['**/css/*.css'],
				options: {
					livereload: true,
				}
			},
			lessWatch: {
				files: 'src/global_styles.less',
        tasks: 'less',
        options: {
          livereload: true,
        }
			}
		},
		less: {
      options: {
        banner: '/* fadeit css compiled with less <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: true
      },
      shared: {
        src: ['src/global_styles.less'],
        dest: 'css/css.min.css'
      }
    },
		jshint: {
			all: {
				src: ['gruntfile.js', 'modules/**/*.js', 'src/*.js'],
				options: {
					jshintrc: true
				}
			}
		},
		concurrent: {
			tasks: ['watch'],
			options: {
				logConcurrentOutput: true
			}
		},
		concat:{
			appScripts:{
				src: ['lib/momentjs/min/moment.min.js', 'lib/jquery/dist/jquery.min.js', 'lib/angular/angular.js', 'lib/angular-resource/angular-resource.js', 'lib/angular-cookies/angular-cookies.js', 'lib/angular-animate/angular-animate.js', 'lib/angular-bootstrap/ui-bootstrap.js', 'lib/angular-ui-utils/ui-utils.js', 'lib/angular-ui-router/release/angular-ui-router.js', 'lib/ngUpload/ng-upload.min.js', 'lib/angular-moment-fadeit/angular-moment.js', 'lib/angular-linkify-fadeit/angular-linkify.min.js', 'lib/wowjs/dist/wow.min.js', 'lib/angular-scroll/angular-scroll.min.js', 'lib/ng-parallax/angular-parallax.min.js', 'scripts/other.min.js'],
				dest: 'scripts/app.js'
			},
			appModules:{
				src: ['moduleRegistration/*.js', 'modules/**/*.js', 'src/*.js'],
				dest: 'scripts/modules.js'
			}
		},
		uglify: {
      //options: { beautify: true, mangle: false, compress: false, }, // <-- DEBUG MODE
      options: {
      	banner: '/* fadeit js compiled <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      	compress: true,
      },
      appScripts: {
      	src: ['scripts/app.js'],
      	dest: 'scripts/app.min.js'
      },
      appModules:{
      	src: ['scripts/modules.js'],
      	dest: 'scripts/modules.min.js'
      }
		}
	});

	//Load NPM tasks 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-env');

	//Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	//Default task(s).
	grunt.registerTask('default', ['jshint', 'concurrent', 'concat', 'uglify']);
};