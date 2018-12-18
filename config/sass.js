const sass = require('node-sass');

module.exports = {
  options: {
    implementation: sass
  },
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= project.dist %>/css/styles.css': '<%= project.src %>/scss/styles.scss'
    }
  },
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= project.dist %>/css/styles.css': '<%= project.src %>/scss/styles.scss'
    }
  }
};
