module.exports = {
  js: {
    src: ['<%= project.src %>/js/*.js',
      '!<%= project.src %>/js/*.es6.js'
    ],
    dest: '<%= project.dist %>/js/scripts.js'
  }
};