module.exports = function(grunt) {

  // Load all tasks
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Define project configs
    project: {
      port: 8000,
      src : 'src',
      dist: 'dist'
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
      ],
      js: [
        '<%= project.src %>/js/*.es5.js',
        '<%= project.src %>/js/*.min.js'
      ]
    },

    // HTML minification
    htmlmin: {
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
          '<%= project.dist %>/css/styles.css' : '<%= project.src %>/scss/styles.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= project.dist %>/css/styles.css' : '<%= project.src %>/scss/styles.scss'
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

    // Javascript linting
    eslint: {
      target: ['<%= project.src %>/js/*.js']
    },

    // ES6 transformation
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= project.src %>/js/',
            src: ['*.es6.js'],
            dest: '<%= project.src %>/js/',
            ext: '.es5.js'
          }
        ]
      }
    },

    concat: {
      js: {
        src: ['<%= project.src %>/js/*.js', '!<%= project.src %>/js/*.es6.js'],
        dest: '<%= project.dist %>/js/scripts.js'
      }
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
          '<%= project.dist %>/js/scripts.js' : '<%= project.dist %>/js/scripts.js'
        }
      },
      dist: {
        options: {
          compress: true,
          mangle: true
        },
        files: {
          '<%= project.dist %>/js/scripts.js' : '<%= project.dist %>/js/scripts.js'
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
        files: '<%= project.src %>/*.html',
        tasks: ['htmlmin:dev']
      },
      css: {
        files: '<%= project.src %>/scss/*.scss',
        tasks: ['sass:dev', 'postcss:dev']
      },
      uglify: {
        files: '<%= project.src %>/js/*.js',
        tasks: ['eslint', 'babel', 'concat:js', 'uglify:dev', 'clean:js']
      }
    }

  });

  // Task for development
  grunt.registerTask('build:dev', [
    'clean:dist',
    'htmlmin:dev',
    'sass:dev',
    'postcss:dev',
    'eslint',
    'babel',
    'concat:js',
    'uglify:dev',
    'clean:js',
    'imagemin:dev',
    'copy'
  ]);

  // Task for production
  grunt.registerTask('build:dist', [
    'clean:dist',
    'htmlmin:dist',
    'sass:dist',
    'postcss:dist',
    'cssmin',
    'eslint',
    'babel',
    'concat:js',
    'uglify:dist',
    'clean:js',
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
