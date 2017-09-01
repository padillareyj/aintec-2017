var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	flatten = require('gulp-flatten'),
	gulpFilter = require('gulp-filter'),
	minifycss = require('gulp-minify-css'),
	mainBowerFiles = require('main-bower-files'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'));
});

// image processing
gulp.task('images', function() {

  return gulp.src('src/images/**/*')
    .pipe(newer('dist/images'))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest('dist/images'));
});


gulp.task('scripts', function() {
  return gulp.src([
				'bower_components/jquery/dist/jquery.js',
				'bower_components/bootstrap/dist/js/bootstrap.js',
				'bower_components/smoothscroll.js',
				'src/js/*.js'
				])
	.pipe(sourcemaps.init())
	 .pipe(concat('temp.js'))
	 .pipe(uglify({
		compress: {
			global_defs: {
				"DEBUG": false
			}
		}
	}))
	.on('error', errorlog)
	 .pipe(rename('main.min.js'))		
	.pipe(sourcemaps.write('../maps')) 
    .pipe(gulp.dest('dist/js'))

    // .pipe(reload({stream:true}));
});


gulp.task('styles', function() {
	gulp.src([
		'bower_components/bootstrap/dist/css/bootstrap.css',
		'src/scss/*.scss'
		])
		.pipe(sourcemaps.init())
		//.pipe(concat('temp.css'))
		.pipe(sass({outputStyle: 'compressed'}))
		.on('error', errorlog)
		.pipe(autoprefixer({
	            browsers: ['last 3 versions'],
	            cascade: false
	      }))	
		//.pipe(rename('main.min.css'))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('dist/css'));
		//.pipe(reload({stream:true}));
});


 
// Error log

function errorlog(err){
	console.error(err.message);
	this.emit('end');
}


gulp.task('default', ['scripts', 'styles', 'html', 'images']);
