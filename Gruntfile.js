module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-phonegap');

	grunt.initConfig({
		phonegap: {
			config: {
				root: 'www',
				plugins: ['https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git'],
				platforms: ['android']
			}
		},

		copy: {
			bower: {
				files: [
					{ src: 'src/components/angular/angular.js', dest: 'www/angular.js' }
				]
			},

			phonegap: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: '**/*',
					dest: 'www/'
				}]
			}
		},

		clean: {
			phonegap: {
				src: 'build'
			},

			build: {
				src: 'www'
			}
		}
	});

	grunt.registerTask('build', ['copy']);
	grunt.registerTask('run', ['phonegap:run']);
	grunt.registerTask('default', ['build', 'phonegap:build']);
};