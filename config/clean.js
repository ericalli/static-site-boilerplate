module.exports = {
  dist: ['<%= project.dist %>/*'],
  js: ['<%= project.src %>/js/*.es5.js',
    '<%= project.src %>/js/*.min.js'
  ]
};