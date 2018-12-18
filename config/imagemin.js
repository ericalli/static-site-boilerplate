module.exports = {
  dev: {
    options: {
      optimizationLevel: 2
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>/img/',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= project.dist %>/img/'
    }]
  },
  dist: {
    options: {
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    },
    files: [{
      expand: true,
      cwd: '<%= project.src %>/img/',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= project.dist %>/img/'
    }]
  }
};