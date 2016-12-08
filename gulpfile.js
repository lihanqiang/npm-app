//获取依赖
var gulp = require("gulp"),
	coffee = require("gulp-coffee"),
	jade = require("gulp-jade"),
	plumber = require("gulp-plumber"),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	clean = require("gulp-clean"),
	runSequence = require('run-sequence'),
	watch = require('gulp-watch'),
	webserver = require('gulp-webserver');
//定义各个目录

var path = {
	app: 'app',
	dist: 'dist',
	jade: ['app/pages/**.jade'],
	assets: ['app/assets'],
	index: 'app/index.jade',
	stylesMain: 'app/styles/entry.scss',
	coffee: ['app/js/index.coffee', 'app/js/**.coffee'],
	jsLibs: [
	    'bower_components/jquery/dist/jquery.js',
	    'bower_components/angular/angular.js',
	    'bower_components/lodash/dist/lodash.js'
 	]
}
gulp.task('clean', function() {
	return gulp.src(path.dist)
	.pipe(clean());
})
gulp.task('copy', function() {
	return gulp.src(path.assets)
		.pipe(gulp.dest(path.dist));
})
gulp.task('jsLibs-deploy', function() {
	return gulp.src(path.jsLibs)
	.pipe(plumber())
	.pipe(concat('libs.js'))
	.pipe(gulp.dest(path.dist + '/js'));
})
gulp.task('jade-deploy', function() {
	return gulp.src(path.jade)
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest(path.dist + '/pages'));
})
gulp.task('index-deploy', function() {
	return gulp.src(path.index)
	.pipe(plumber())
	.pipe(jade({
		'pretty': true
	}))
	.pipe(gulp.dest(path.dist));
})
gulp.task('sass-deploy', function() {
	return gulp.src(path.stylesMain)
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest(path.dist + '/styles'));
})
gulp.task('coffee-deploy', function() {
	return gulp.src(path.coffee)
	.pipe(plumber())
	.pipe(coffee())
	.pipe(concat('all.js'))
	.pipe(gulp.dest(path.dist + '/js'));
})
// gulp.task('concat', function() {
// 	gulp.src(path.coffee)
// 	.pipe(plumber())
// 	.pipe(concat('all.js'))
// 	.pipe(gulp.dest(path.dist + '/js'));
// })
gulp.task('webserver', function(){
	return gulp.src('dist')
		.pipe(webserver({
			livereload: true,
			open: true,
			portt: 4000
		}))
})
gulp.task('watch', function() {
  gulp.watch(path.jade, ['jade-deploy'])
  gulp.watch(path.index, ['index-deploy'])
  gulp.watch(path.stylesMain, ['sass-deploy'])
  gulp.watch(path.coffee, ['coffee-deploy'])
  gulp.watch(["dist/js/all.js","dist/styles/entry.css","dist/index.html"])
    .on("change",livereload.changed)
});


gulp.task('default', function() {
	runSequence(
	[
		'jsLibs-deploy',
		'copy',
		'jade-deploy',
		'index-deploy',
		'sass-deploy'
	],
	'webserver',
	'watch'
	);
})
	
