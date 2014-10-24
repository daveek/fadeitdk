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
				files: ['js/**/*.js', 'modules/**/*.js', 'src/*.js', 'config/*.js', 'balls/**/*.js'],
				tasks: ['concurrent'],
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
			tasks: ['concat', 'jshint', 'uglify', 'copy', 'less', 'cssmin'],
			options: {
				logConcurrentOutput: true,
				limit: 10
			}
		},
		concat:{
			appScripts:{
				src: [
				'lib/momentjs/moment.js',
				'lib/jquery/dist/jquery.js',
				'lib/angular/angular.js',
				'lib/angular-resource/angular-resource.js',
				'lib/angular-cookies/angular-cookies.js',
				'lib/angular-animate/angular-animate.js',
				'lib/angular-bootstrap/ui-bootstrap.js',
				'lib/angular-ui-utils/ui-utils.js',
				'lib/angular-ui-router/release/angular-ui-router.js',
				'lib/angular-moment-fadeit/angular-moment.js',
				'lib/angular-linkify-fadeit/angular-linkify.js',
				'lib/wowjs/dist/wow.js',
				'scripts/other.min.js',
				'lib/angular-load/angular-load.js'],
				dest: 'scripts/app.js'
			},
			appModules:{
				src: ['moduleRegistration/*.js', 'modules/**/*.js', 'src/*.js'],
				dest: 'scripts/modules.js'
			},
			vendorCss:{
				src: [
					'lib/bootstrap/dist/css/bootstrap.css',
					'lib/bootstrap/dist/css/bootstrap-theme.css',
					'lib/animate.css/animate.min.css',
					'lib/font-awesome/css/font-awesome.min.css'],
				dest:'css/vendor.css'
			},
			techScripts:{
				src: ['balls/protoclass.js','balls/box2d.js','balls/Main.js'],
				dest: 'scripts/technologies.js'
			}
		},
		uglify: {
			options: {
			beautify: false,
			mangle: true,
			//compress: {drop_console: true},
			banner: '/* fadeit js compiled <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
			appScripts: {
				src: ['scripts/app.js'],
				dest: 'scripts/app.min.js'
			},
			config:{
				src: ['config/config.js'],
				dest: 'scripts/config.min.js'
			},
			appModules:{
				src: ['scripts/modules.js'],
				dest: 'scripts/modules.min.js'
			},
			techScripts:{
				src: ['scripts/technologies.js'],
				dest: 'scripts/technologies.min.js'
				//options: { beautify: false, mangle: true, compress: true}
			}

		},
		cssmin: {
			options: {
				banner: '/* fadeit vendor css compiled <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			},
			vendorCss: {
				src: ['css/vendor.css'],
				dest: 'css/vendor.min.css'
			}
		},
		copy: {
			cssFonts:{
				expand: true,
				src: ['lib/bootstrap/fonts/*', 'lib/font-awesome/fonts/*'],
				dest: 'fonts/',
				flatten: true,
				filter: 'isFile'
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
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-env');

	//Making grunt default to force in order not to break the project.
	//grunt.option('force', true);

	//Default task(s).
	grunt.registerTask('default', ['concurrent', 'watch']);
};
