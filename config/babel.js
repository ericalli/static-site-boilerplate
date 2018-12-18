module.exports = {
  options: {
    sourceMap: false,
    presets: ['@babel/preset-env']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= project.src %>/js/',
      src: ['*.es6.js'],
      dest: '<%= project.src %>/js/',
      ext: '.es5.js'
    }]
  }
};