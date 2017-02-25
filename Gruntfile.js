module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({

    //QUNIT
    qunit: {
      files: ['./test/qunit.html', './test/qunit.min.html']
    },

    //MINIFICATION
    uglify: {
      my_target: {
        files: {
          'dist/mathjax-parser.min.js': ['mathjax-parser.js']
        }
      }
    },

    //BUILDING ANGULAR SERVICE
    'template': {
      'process-html-template': {
        'options': {
          'data': {
            'parser': grunt.file.read('./dist/mathjax-parser.js')
          }
        },
        'files': {
          'dist/angular-mathjax-parser.js': ['./src/angular-mathjax-parser.js.tpl']
        }
      }
    }

  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-template');

  // Task to run tests
  grunt.registerTask('test', 'qunit');
  grunt.registerTask('build', 'template');

};