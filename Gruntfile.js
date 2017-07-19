// const grunt = require('load-grunt-tasks'); // npm install --save-dev load-grunt-tasks
const path = require('path');

// const pathConfig = require('./config/paths');

module.exports = function gruntExport (grunt) {
  grunt.initConfig({
    eslint: {
      gruntfile: ['Gruntfile.js'],
      serverjs: {
        src: [
          // path.resolve(__dirname, '{,**/}*.js')
          path.resolve(__dirname, '*.js'),
          path.resolve(__dirname, 'server/*.js'),
          path.resolve(__dirname, 'config/*.js')
          // path.resolve(__dirname, 'config/{,**/}*.js')
          // path.resolve(pathConfig.server, 'index.js'),
          // path.resolve(pathConfig.serverLib, '{,**/}*.js')
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint:serverjs']);
};
