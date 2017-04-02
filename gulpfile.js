//файлы css-файлов
var css_files = new Array(
	'css/*.css',
	'libs/bootstrap/bootstrap-grid-3.3.1.min.css',
	'libs/fancybox/jquery.fancybox.css', 
	'libs/owl.carousel/assets/owl.carousel.css'
);
//Название общего фала для всех стилей
var css_style_name = 'style.min.css';

//файлы js-скриптов
var js_files = new Array(
	'libs/jquery/jquery-1.11.1.min.js',
	'libs/owl.carousel/owl.carousel.js',
	'libs/fancybox/jquery.fancybox.pack.js',
	'libs/validation/jquery.validate.min.js',
	'js/jquery.maskedinput.min.js',
	'js/is.mobile.js',
	'js/commonmenu.js',
	'js/commoncalc.js',
	'js/common.js'
);
//Название общего файла для всех js-скриптов
var js_scripts_name = 'scripts.min.js';
	
//Заугразка библиотек
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	minifyJS = require('gulp-minify'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	rename = require("gulp-rename");
	imagemin     = require('gulp-imagemin'); 

//Объединение и минификация всех собственных 
gulp.task('default', ['concatCSS', 'compressJS', 'imagemin', 'imageMenu', 'includeFiles', 'rootFiles'], function() {
  return gulp.src(css_files)
    .pipe(concat('css_style_name.css')) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('product/css/'));
});

//Объединение и минификация всех стилей подключаемых библиотек и общих стилей
gulp.task('concatCSS', function() {
  return gulp.src(css_files)
    .pipe(concat(css_style_name)) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('product/css/'));
});

//Объединение и сжатие всех js-скриптов
gulp.task('compressJS', function(){
    return gulp.src(js_files)
        .pipe(concat(js_scripts_name))
        .pipe(uglify())
        .pipe(gulp.dest('product/js/'));
});

//Оптимизаця картинок
gulp.task('imagemin', function() {
    return gulp.src('img/**.*')
           .pipe(imagemin({
                progressive: true
           }))
           .pipe(gulp.dest('product/img/'))
});

gulp.task('imageMenu', function() {
    return gulp.src('img/menu/**.*')
           .pipe(imagemin({
                progressive: true
           }))
           .pipe(gulp.dest('product/img/menu/'))
});

//Перенос всех файлов папки include, если это нужно
gulp.task('includeFiles', function() {
	return gulp.src('includes/**.*')
		
		.pipe(gulp.dest('product/includes')); 
});
//Перенос файлов в корне
gulp.task('rootFiles', function() {
	return gulp.src('*.*')
		
		.pipe(gulp.dest('product/')); 
});
//Перенос .htaccess
gulp.task('htaccessFiles', function() {
	return gulp.src('.htaccess')
		
		.pipe(gulp.dest('product/')); 
});
