
/*	Dependencies
---------------------------------------------------------------------- */
var gulp = require('gulp'),
	angularHTMLify = require('gulp-angular-htmlify'),
	autoprefixer = require('gulp-autoprefixer'),
	changed = require('gulp-changed'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	imagemin = require('gulp-imagemin'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-minify-html'),
	sass = require('gulp-sass'),
	stripDebug = require('gulp-strip-debug'),
	ngmin = require('gulp-ngmin'),
	uglify = require('gulp-uglify'),
	util = require('gulp-util')
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload');



/*	Default Task
---------------------------------------------------------------------- */
gulp.task('default', [
	'jshint', 
	'vendorScripts', 
	'appScripts', 
	'styles', 
	'cssImages',
	'html'
], function(){
	
	// AngularJS Scripts
	gulp.watch('development/app/**/*', function(){
		gulp.run('jshint', 'appScripts');
	});

	// Sass Files
	gulp.watch('development/styles/**/*', function(){
		gulp.run('styles');
	});
	
	// CSS Images
	gulp.watch('development/styles/img/**/*', function(){
		gulp.run('cssImages');
	});

	// HTML Files
	gulp.watch([
		'development/index.html', 
		'development/views/*.html'
	], function() {
		gulp.run('html');
	});
});



/*	JavaScript Tasks
---------------------------------------------------------------------- */
gulp.task('jshint', function(){
	gulp.src('development/app/**/*.js')
		.pipe(jshint())
    	.pipe(jshint.reporter('default'));
});


// Vendor scripts
gulp.task('vendorScripts', function() {
	gulp.src([
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/angular/angular.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-cookies/angular-cookies.min.js',
			'bower_components/angular-resource/angular-resource.min.js',
			'bower_components/angular-touch/angular-touch.min.js',
			'bower_components/angular-sanitize/angular-sanitize.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/ng-file-upload/angular-file-upload.js'
		])
		.pipe(concat('vendor.js'))
		//.pipe(stripDebug())
		//.pipe(ngmin())
		//.pipe(uglify())
		.pipe(gulp.dest('public/scripts/'));
});


// App scripts
gulp.task('appScripts', function() {
	gulp.src([
			'development/app/app.js',
			'development/app/services/*.js',
			'development/app/directives/*.js',
			'development/app/filters/*.js',
			'development/app/controllers/**/*.js'
		])
		.pipe(concat('app.js'))
		//.pipe(stripDebug())
		//.pipe(ngmin())
		//.pipe(uglify())
		.pipe(gulp.dest('public/scripts/'));
});



/*	CSS Tasks
---------------------------------------------------------------------- */
gulp.task('styles', function() {
	// Process SASS
	gulp.src('development/styles/main.scss')
		.pipe(sass({
			onError: function(e) {
				return notify().write(e);
			}
		}))
		.pipe(autoprefixer('last 2 versions', 'ie 9', 'safari 5.1', 'chrome 15', 'opera 11', 'firefox 7'))
		// .pipe(minifyCSS())
		.pipe(gulp.dest('public/styles/'))
		.pipe(livereload({auto: true}));

	// Process CSS images
	gulp.src('development/styles/img/*').
		pipe(gulp.dest('public/styles/img/'));
});



/*	Images
---------------------------------------------------------------------- */
gulp.task('cssImages', function(){
	gulp.src('development/styles/img/**/*')
		.pipe(changed('public/styles/img'))
		.pipe(imagemin())
		.pipe(gulp.dest('public/styles/img'));
});



/*	HTML Tasks
---------------------------------------------------------------------- */
gulp.task('html', function() {
	// Index File
	gulp.src('development/index.html')
		.pipe(angularHTMLify())
		// .pipe(minifyHTML())
		.pipe(gulp.dest('public'));

	// Angular Template Files
	gulp.src('development/views/*.html')
		.pipe(angularHTMLify())
		// .pipe(minifyHTML())
		.pipe(gulp.dest('public/views'));
});

















