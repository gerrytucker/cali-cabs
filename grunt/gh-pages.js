module.exports = {
	'gh-pages': {
		options: {
			base: 'dist',
			repo: 'http://github.com/gerrytucker/grunt-frontend-boilerplate',
			branch: 'develop',
			message: 'Auto-generated commit <%= grunt.template.today("dd/mm/yyyy") %> <%= grunt.template.today("h:MM:ss TT") %>',
			dotFiles: true
		},
		src: ['**/*', '.*']
	}
};