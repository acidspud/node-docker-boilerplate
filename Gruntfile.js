// const grunt = require('load-grunt-tasks'); // npm install --save-dev load-grunt-tasks
const path = require('path');

const pathConfig = require('./config/paths');

module.exports = function gruntExport (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    eslint: {
      gruntfile: ['Gruntfile.js'],
      serverjs: {
        src: [
          // path.resolve(__dirname, '{,**/}*.js')
          path.resolve(__dirname, '*.js'),
          path.resolve(__dirname, 'server/*.js'),
          path.resolve(__dirname, 'config/*.js')
        ]
      }
    },
    express: {
      options: {
        background: true,
        output: /App1 - Server listening on port \d+/
      },
      serverDev: {
        options: {
          script: path.resolve(pathConfig.server, 'app.js')
        }
      }
    }
  });

  grunt.registerTask('lint', [
    'eslint:gruntfile'
  ]);


  grunt.registerTask('server', [
    'eslint:serverjs',
    'express:serverDev'
  ]);

  grunt.registerTask('default', ['eslint:serverjs']);
};
