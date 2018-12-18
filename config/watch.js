module.exports = {
  options: {
    livereload: true
  },
  html: {
    files: '<%= project.src %>/*.html',
    tasks: ['htmlmin:dev']
  },
  css: {
    files: '<%= project.src %>/scss/*.scss',
    tasks: ['sass:dev', 'postcss:dev']
  },
  uglify: {
    files: '<%= project.src %>/js/*.js',
    tasks: ['eslint', 'babel', 'concat:js', 'uglify:dev', 'clean:js']
  }
};