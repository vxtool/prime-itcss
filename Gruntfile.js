module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'tasks/gruntjs'),
        data: {
        	projectDev : 'source/',
        	projectDir : 'dist/',
            pkg: grunt.file.readJSON('package.json')
        }
    });

};