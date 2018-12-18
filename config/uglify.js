module.exports = {
  dev: {
    options: {
      compress: false,
      mangle: false,
      sourceMap: true,
      beautify: true
    },
    files: {
      '<%= project.dist %>/js/scripts.js': '<%= project.dist %>/js/scripts.js'
    }
  },
  dist: {
    options: {
      compress: true,
      mangle: true
    },
    files: {
      '<%= project.dist %>/js/scripts.js': '<%= project.dist %>/js/scripts.js'
    }
  }
};