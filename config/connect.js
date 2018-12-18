module.exports = {
  server: {
    options: {
      port: '<%= project.port %>',
      base: '<%= project.dist %>/',
      livereload: true
    }
  }
};