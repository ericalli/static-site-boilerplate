module.exports = function(grunt) {

  // Load all tasks
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Define project configs
  var options = {
    project: {
      port: 8000,
      src : 'src',
      dist: 'dist'
    }
  };

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  // Task for development
  grunt.registerTask('build:dev', [
    'clean:dist',
    'htmlmin:dev',
    'sass:dev',
    'postcss:dev',
    'eslint',
    'babel',
    'concat:js',
    'uglify:dev',
    'clean:js',
    'imagemin:dev',
    'copy'
  ]);

  // Task for production
  grunt.registerTask('build:dist', [
    'clean:dist',
    'htmlmin:dist',
    'sass:dist',
    'postcss:dist',
    'cssmin',
    'eslint',
    'babel',
    'concat:js',
    'uglify:dist',
    'clean:js',
    'imagemin:dist',
    'copy'
  ]);

  // Task for development server
  grunt.registerTask('start', [
    'build:dev',
    'connect',
    'open',
    'watch'
  ]);
};
