module.exports = function(grunt) {

  // load all tasks
  const sass = require('node-sass');
  
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Define project specific configs
    project: {
      src         : 'src',
      dist        : 'dist',
      html_files  : [
        '<%= project.src %>/index.html'
      ],
      css_files  : [
        '<%= project.src %>/scss/styles.scss'
      ],
      js_files    : [
        '<%= project.src %>/js/jquery-3.3.1.js',
        '<%= project.src %>/js/custom.js'
      ]
    },
    
    // Local web server
    connect: {
      server: {
        options: {
          port: 8000,
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
    jshint: {
      options : {
        node: true,
        browser: true,
        esnext: true,
        bitwise: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: single,
        regexp: true,
        undef: true,
        unused: true,
        strict: true,
        trailing: false,
        smarttabs: true,
        globals : {
          jQuery: true,
          Modernizr: true
        }
      },
      all: {
        src: '<%= project.js_files %>'
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
  
  // Build for development
  grunt.registerTask('build:dev', [
    'clean',
    'htmlmin:dev', 
    'sass:dev', 
    'postcss:dev',
    'jshint',
    'uglify:dev', 
    'imagemin:dev'
  ]);
  
  // Build for production
  grunt.registerTask('build:dist', [
    'clean',
    'htmlmin:dist', 
    'sass:dist', 
    'postcss:dist',
    'cssmin',
    'jshint',
    'uglify:dist', 
    'imagemin:dist'
  ]);
  
  // Run development server
  grunt.registerTask('start', [
    'build:dev', 
    'connect', 
    'watch',
    'open'
  ]);
};