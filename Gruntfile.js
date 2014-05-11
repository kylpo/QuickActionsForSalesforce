module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: ['components/*.jsx', 'js/*.js', 'secret.js'],
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['components/*.jsx', 'js/*.js', 'secret.js'],
                dest: 'app.built.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'browserify'
    ]);
};