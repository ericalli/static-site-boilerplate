module.exports = {
  options: {
    processors: [
      require('autoprefixer')({browsers: ['last 2 versions']})
    ]
  },
  dev: {
    options: {
      map: true
    },
    src: '<%= project.dist %>/css/styles.css'
  },
  dist: {
    options: {
      map: false
    },
    src: '<%= project.dist %>/css/styles.css'
  }
};
