module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		connect: {
			'test-server': {
				options: {
					port: '9000',
					keepalive: true
				}
			}
		}
	});
};