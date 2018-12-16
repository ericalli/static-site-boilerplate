module.exports = function(grunt) {

  // load all tasks
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Define project configs
    project: {
      port        : 8000,
      src         : 'src',
      dist        : 'dist',
      html_files  : [
        '<%= project.src %>/index.html'
      ],
      css_files  : [
        '<%= project.src %>/scss/styles.scss'
      ],
      js_files    : [
        '<%= project.src %>/js/scripts.js'
      ]
    },

    // Local web server
    connect: {
      server: {
        options: {
          port: '<%= project.port %>',
          base: '<%= project.dist %>/',
          livereload: true
        }
      }
    },

    // Clean build directory
    clean: {
      dist: [
        '<%= project.dist %>/*',
      ]
    },

    // HTML minification
    htmlmin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= project.src %>',
          src: ['*.html', '*.php'],
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
    },

    // CSS compilation
    sass: {
      options: {
        implementation: sass
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= project.dist %>/css/styles.css' : '<%= project.css_files %>'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= project.dist %>/css/styles.css' : '<%= project.css_files %>'
        }
      }
    },

    // CSS autoprefixes
    postcss: {
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
    },

    // CSS minification
    cssmin: {
      combine: {
        files: {
          '<%= project.dist %>/css/styles.css' : ['<%= project.dist %>/css/styles.css']
        }
      }
    },

    // JS linting
    eslint: {
      target: ['<%= project.js_files %>']
    },

    // Javascript compilation
    uglify: {
      dev: {
        options: {
          compress: false,
          mangle: false,
          sourceMap: true,
          beautify: true
        },
        files: {
          '<%= project.dist %>/js/scripts.js' : '<%= project.js_files %>'
        }
      },
      dist: {
        options: {
          compress: true,
          mangle: true
        },
        files: {
          '<%= project.dist %>/js/scripts.js' : '<%= project.js_files %>'
        }
      }
    },

    // Image optimization
    imagemin: {
      dev: {
        options: {
          optimizationLevel : 2,
        },
        files: [{
          expand : true,
          cwd    : '<%= project.src %>/img/',
          src    : ['**/*.{png,jpg,gif,svg}'],
          dest   : '<%= project.dist %>/img/'
        }]
      },
      dist: {
        options: {
          optimizationLevel : 7,
          progressive       : true,
          interlaced        : true
        },
        files: [{
          expand : true,
          cwd    : '<%= project.src %>/img/',
          src    : ['**/*.{png,jpg,gif,svg}'],
          dest   : '<%= project.dist %>/img/'
        }]
      }
    },

    // Server configs
    copy: {
      server: {
        files: [
          {
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
          },
        ]
      }
    },

    // Open server in browser
    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }
    },

    // Watch tasks
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: '<%= project.html_files %>',
        tasks: ['htmlmin:dev']
      },
      css: {
        files: '<%= project.css_files %>',
        tasks: ['sass:dev', 'postcss:dev']
      },
      uglify: {
        files: '<%= project.js_files %>',
        tasks: ['uglify:dev']
      }
    }

  });

  // Task for development
  grunt.registerTask('build:dev', [
    'clean',
    'htmlmin:dev',
    'sass:dev',
    'postcss:dev',
    'eslint',
    'uglify:dev',
    'imagemin:dev',
    'copy'
  ]);

  // Task for production
  grunt.registerTask('build:dist', [
    'clean',
    'htmlmin:dist',
    'sass:dist',
    'postcss:dist',
    'cssmin',
    'eslint',
    'uglify:dist',
    'imagemin:dist',
    'copy'
  ]);

  // Task for development server
  grunt.registerTask('start', [
    'build:dev',
    'connect',
    'open',
    'watch'
  ]);
};
