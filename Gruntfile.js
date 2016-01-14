module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
			
		  watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    reload: true
                }
            }
        },
			compass: {
			   dev: {
			       options: {              
			           sassDir: ['sass/scss'],
			           cssDir: ['css/css'],
			           environment: 'development'
			       }
			   }
			 },

		cssmin:{
			combine:{
				files:{
					'css/output.css':['css/screen.css','css/print.css']
				}
			}
		},

		sass: {                           
		    dist: {                           
		      options: {                      
		        style: 'compressed',
		      },
		      files: {        
		        'css/output.css': 'sass/main.scss',
		      }
		    }
	  },

		// uglify..
		uglify:{
			dist:{
				files:{
					'js/output.js':["node_modules/jquery/dist/jquery.js",'node_modules/bootstrap/bootstrap.js','js/main.js']
				}
			}
		}
	});

	//load plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// do the task
	grunt.registerTask('default',['cssmin','sass','uglify','watch']);
};