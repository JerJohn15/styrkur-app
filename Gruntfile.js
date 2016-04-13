module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerMultiTask('template-define-name', 'Add name to define function', function() {
        var _ = require('lodash');
        var lf = grunt.util.linefeed;
        var options = this.options({
            rootPath: 'www/js/',
            separator: ';' + lf,
            templateSettings: {}
        });

        var cutRootPath = function(path){
            if(path.indexOf(options.rootPath) === 0){
                return path.substring(options.rootPath.length);
            }
            return path;
        }

        this.files.forEach(function(f){
            var output = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    grunt.log.write('Source file "' + filepath + '" accepted.');
                    return true;
                }
            })
            //Go through each file
            .map(function(filepath){
                var src = grunt.file.read(filepath),
                      compiled;
                try {
                    compiled = _.template(src).source;
                } catch (e) {
                    grunt.log.error(e);
                    grunt.fail.warn('JST "' + filepath + '" failed to compile.');
                }

                if (options.amd) {
                    return 'define("' + cutRootPath(filepath) +  '", function(){ return ' + compiled + '})';
                }
            });

            if (output.length < 1) {
                grunt.log.warn('Destination not written because compiled files were empty.');
            } else {
                grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
        });
    });


    /* We already have a build file in the js folder, lets reuse that one! */
    var buildOptionsFile = grunt.file.read( 'www/js/app.build.js' );
    var buildOptions = eval( buildOptionsFile );
    /* Fix the pats */
    buildOptions.baseUrl = 'www/js';
    buildOptions.out = 'www/js/main_app.js';

    grunt.initConfig({
        'template-define-name': {
            compile: {
                options: {
                    templateSettings: {
                        interpolate : /\{\{(.+?)\}\}/g
                    },
                    amd: true,
                    rootPath: 'www/js/'
                },
                files: {
                    "www/js/templates/templates.js": [
                            "www/js/templates/**/*.html"
                        ]
                }
            }
        },
        requirejs: {
          compile: {
            options: buildOptions
          }
        },
        uglify: {
            options: {
                compress: {}
            },
            my_target: {
                files: {
                    'www/js/main_app.min.js': ['www/js/main_app.js']
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2,
                    ids: false,
                    important: false,
                    "fallback-colors": false
                },
                src: ['www/css/style.css']
            }
        },
        concat: { /* CSS TODO: minify! */
            options: {
                separator: '\n',
            },
            dist: {
                src: [
                        'www/css/bootstrap.css',
                        'www/css/app-optimize.css',
                        'www/css/cards.css',
                        'www/css/mfglabs_iconset.css',
                        'www/css/toastr.css',
                        'www/css/style.css',
                        'www/css/transitions.css',
                        'www/css/chartist.min.css'
                    ],
                dest: 'www/css/main.css'
            }
        },
        copy: {
            main: {
                src: [ /* Files we want to use in the mobile app */
                    'www/mobile.html',
                    'www/css/main.css',
                    'www/fonts/*',
                    'www/libs/almond/almond.js',
                    'www/libs/date/date.js',
                    'www/js/main_app.js'
                ], 
                dest: 'mobile/',
                filter: 'isFile'
            }
        }
    });

    grunt.registerTask('default', ['template','optimize']);

    grunt.registerTask('css', ['concat']);
    grunt.registerTask('optimize', ['requirejs','uglify']);
    grunt.registerTask('template', ['template-define-name']);
    
    grunt.registerTask('build', ['template','optimize', 'css',]);
    grunt.registerTask('mobile', ['template','optimize','css', 'copy']);
};
