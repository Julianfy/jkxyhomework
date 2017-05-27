 var gulp = require('gulp');
 var htmlmin = require('gulp-htmlmin')
 var browserify = require('gulp-browserify');
 var uglify = require('gulp-uglify');
 var sass = require('gulp-sass');
 var browserSync = require('browser-sync');
 var watch = require('gulp-watch');
 var imagemin = require('gulp-imagemin');
 var minify = require('gulp-minify-css');
 var reload = browserSync.reload;
 var pngcrush = require('imagemin-pngcrush')

 // 编译sass
 gulp.task('css', function() {
        return gulp.src('./css/index.scss')
             .pipe(sass())
             .pipe(gulp.dest('dist/css'))
             .pipe(reload({ stream: true }));
     })
     // 监视 Sass 文件的改动，如果发生变更，运行 'sass' 任务
 gulp.task('callbackcss', function() {
     return watch('css/**/*.scss', function() {
         gulp.src('css/**/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('dist/css'));
     });
 });
 // 对js进行压缩
 gulp.task('uglifyjs',function(){
 	return gulp.src('./js/index.js')
 	.pipe(browserify())
 	.pipe(uglify())
 	.pipe(gulp.dest('dist/js'))
 })
 // 对图片进行压缩
 // gulp.task('img',function(){
 // 	return gulp.src('./image/*')
 // 	.pipe(imagemin({
 // 		progressive:true,
 // 		svgoPlugins:[{removeViewBox:false}],
 // 		use:[pngcrush()]
 // 	}))
 // 	.pipe(gulp.dest('dist/image/'))
 // });

// 对css进行压缩
gulp.task('mincss',function(){
	gulp.src('./dist/css/*.css')
	.pipe(minify())
	.pipe(gulp.dest('dist/min.css'))
})
// 对html进行压缩
// gulp.task('html',function(){
// 	return gulp.src('*.html')
// 	.pipe(htmlmin({collapseWhitespace:true}))
// 	.pipe(gulp.dest('dist'))
// })


 gulp.task('default', ['callbackcss','uglifyjs','mincss','css'], function() {
     console.log('hhh')
 });
