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
				files: ['js/**/*.js', 'modules/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true,
				}
			},
			otherJS: {
				files: ['src/*.js'],
				tasks: ['jshint', 'uglify'],
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
        banner: '/* prototype css compiled with less <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: true
      },
      shared: {
        src: ['src/global_styles.less'],
        dest: 'css/css.min.css'
      }
    },
		jshint: {
			all: {
				src: ['gruntfile.js', 'js/**/*.js', 'modules/**/*.js', 'src/*.js'],
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
		uglify: {
      //options: { beautify: true, mangle: false, compress: false, }, // <-- DEBUG MODE
      options: {
      	banner: '/* prototype js compiled <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      	compress: true,
      },
      js_other: {
        src: 'src/*.js',
        dest: 'scripts/js.min.js',
      },
		}
	});

	//Load NPM tasks 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-env');

	//Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	//Default task(s).
	grunt.registerTask('default', ['jshint', 'concurrent', 'uglify']);
};