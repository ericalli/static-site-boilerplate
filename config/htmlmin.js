module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: '<%= project.src %>',
      src: ['*.html'],
      dest: '<%= project.dist %>'
    }]
  },
  dist: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>',
      src: ['*.html'],
      dest: '<%= project.dist %>'
    }]
  }
};