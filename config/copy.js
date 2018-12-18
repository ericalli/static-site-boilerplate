module.exports = {
  server: {
    files: [{
        expand: true,
        cwd: 'node_modules/apache-server-configs/dist/',
        src: '.htaccess',
        dest: '<%= project.dist %>'
      },
      {
        expand: true,
        cwd: '<%= project.src %>',
        src: 'robots.txt',
        dest: '<%= project.dist %>'
      }
    ]
  }
};